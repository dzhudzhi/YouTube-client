const data = {
  queryTerm: '',
  videos: [],
  nextPageToken: '',
};

let renderList = null;

export function subscribe(listener) {
  renderList = listener;
}

export function addVideos(videos) {
  data.videos = data.videos.concat(videos);
  renderList();
}

export function getVideos() {
  return data.videos;
}

export function setQueryTerm(queryTerm) {
  data.queryTerm = queryTerm;
  data.videos = [];
  data.nextPageToken = '';
}

export function setNextPageToken(pageToken) {
  data.nextPageToken = pageToken;
}

export function getQueryTerm() {
  return data.queryTerm;
}

export function getNextPageToken() {
  return data.nextPageToken;
}
