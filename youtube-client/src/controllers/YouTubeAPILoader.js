class YouTubeAPILoader {
  constructor() {
    this.baseLink = 'https://www.googleapis.com/youtube/v3/';
    this.settings = {
      key: 'AIzaSyBNoCMgHdYGx70WFPH8ZcDsZclfC9fvzGw',
    };
    this.searchTerm = 'Never Gonna Give You Up';
    this.nextPageToken = '';
  }

  makeUrl(options, endPoint) {
    const urlOptions = { ...this.settings, ...options };
    let url = `${this.baseLink}${endPoint}?`;
    Object.keys(urlOptions).forEach((i) => {
      url += `${i}=${urlOptions[i]}&`;
    });
    return url.slice(0, -1);
  }

  getResp(q = '', nextPage) {
    const optionsSearch = {
      q: q === '' ? this.searchTerm : q,
      pageToken: nextPage ? this.nextPageToken : '',
      part: 'snippet',
      maxResults: '15',
      order: 'viewCount',
      type: 'video',
    };
    return fetch(this.makeUrl(optionsSearch, 'search'))
      .then(res => res.json())
      .then(({ items: videoIds, nextPageToken }) => {
        this.nextPageToken = nextPageToken;
        const optionsVideos = {
          part: 'snippet,statistics',
          id: videoIds.map(({ id }) => id.videoId).join(','),
        };
        return fetch(this.makeUrl(optionsVideos, 'videos'))
          .then(res => res.json());
      });
  }
}

export default YouTubeAPILoader;
