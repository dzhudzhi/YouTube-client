import {
  getQueryTerm,
  getNextPageToken,
  addVideos,
  setNextPageToken,
} from '../data/data';

const collectVideosList = videos => (
  videos.map(({ id, snippet, statistics }) => {
    const {
      title,
      channelTitle,
      description,
      publishedAt,
      thumbnails,
    } = snippet;
    const { viewCount } = statistics;
    return {
      id,
      title,
      channelTitle,
      description,
      publishedAt,
      thumbnails,
      viewCount,
    };
  })
);

function createSearchUrl() {
  const keyParam = '&key=AIzaSyBNoCMgHdYGx70WFPH8ZcDsZclfC9fvzGw';
  const url = 'https://www.googleapis.com/youtube/v3/';
  const searchListParams = 'search?part=snippet&maxResults=15&order=viewCount';
  const qParam = `&q=${getQueryTerm()}`;
  const pageToken = getNextPageToken();
  const pageTokenParam = pageToken ? `&pageToken=${pageToken}` : '';
  const result = `${url}${searchListParams}${pageTokenParam}${qParam}${keyParam}`;
  return result;
}

function createVideosUrl(videoIds) {
  const keyParam = '&key=AIzaSyBNoCMgHdYGx70WFPH8ZcDsZclfC9fvzGw';
  const url = 'https://www.googleapis.com/youtube/v3/';
  const videosListParams = 'videos?part=snippet,statistics';
  const videoIdsList = videoIds.map(({ id }) => id.videoId).join(',');
  const result = `${url}${videosListParams}&id=${videoIdsList}${keyParam}`;
  return result;
}

export default function fetchVideos() {
  const requestSearchList = createSearchUrl();
  return fetch(requestSearchList)
    .then(response => response.json())
    .then(({ items: videoIds, nextPageToken }) => {
      setNextPageToken(nextPageToken);
      const requestVideosList = createVideosUrl(videoIds);
      return fetch(requestVideosList)
        .then(response => response.json())
        .then(({ items: videos }) => {
          addVideos(collectVideosList(videos));
        });
    });
}
