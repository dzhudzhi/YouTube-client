const data = {};

export function addVideos(videos) {
  data.videos = data.videos.concat(videos);
  console.log(data);
}

export function setQueryTerm(queryTerm) {
  data.queryTerm = queryTerm;
  data.videos = [];
  data.nextPageToken = '';
  console.log(data);
}

export function setNextPageToken(pageToken) {
  data.nextPageToken = pageToken;
  console.log('page token');
}

export function getQueryTerm() {
  return data.queryTerm;
}

export function getNextPageToken() {
  return data.nextPageToken;
}
