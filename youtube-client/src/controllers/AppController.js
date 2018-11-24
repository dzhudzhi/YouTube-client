import YouTubeAPILoader from './YouTubeAPILoader';

class AppController extends YouTubeAPILoader {
  constructor() {
    super();
    this.state = {};
  }

  initState() {
    this.state = {
      videos: [],
      currentIndex: 0,
      videosPerPage: 3,
    };
  }

  prepareData(index) {
    // const videos = this.state.videos.slice(index, index + this.state.videosPerPage);
    const { videos } = this.state;
    const pages = [];
    for (let i = index; i < videos.length + index; i += 1) {
      pages.push(i + 1);
    }
    return { videos, pages };
  }

  getVideosFirst(searchTerm, callback) {
    this.initState();
    super.getResp(searchTerm, false)
      .then(({ items: videos }) => {
        this.state.videos = this.state.videos.concat(videos);
        const { currentIndex } = this.state;
        callback(this.prepareData(currentIndex));
      });
  }

  getVideosNext() {
    super.getResp('', true)
      .then(({ items: videos }) => {
        this.state.videos = this.state.videos.concat(videos);
      });
  }

  showVideos(direction = 'same', callback) {
    switch (direction) {
      case 'next': {
        const index = this.state.currentIndex + this.state.videosPerPage;
        this.state.currentIndex = index;
        const howClose = this.state.videos.length - index;
        const timeToLoad = 2 * this.state.videosPerPage + 1;
        if (howClose < timeToLoad) {
          this.getVideosNext();
        }
        callback(this.prepareData(index));
        break;
      }
      case 'prev': {
        if (!(this.state.currentIndex === 0)) {
          let index = this.state.currentIndex - this.state.videosPerPage;
          if (index < 0) {
            index = 0;
          }
          this.state.currentIndex = index;
          callback(this.prepareData(index));
        }
        break;
      }
      default: {
        break;
      }
    }
  }
}

export default AppController;
