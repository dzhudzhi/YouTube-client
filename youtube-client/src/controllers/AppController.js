import YouTubeAPILoader from './YouTubeAPILoader';

class AppController extends YouTubeAPILoader {
  constructor() {
    super();
    const docWidth = document.documentElement.clientWidth;
    const videosPerPage = Math.floor(docWidth / 330);
    this.state = {
      currentIndex: 0,
      videoItemWidth: 330,
      videosPerPage,
      length: 0,
    };
    this.x0 = null;
  }

  setState(currentIndex, videoItemWidth, videosPerPage) {
    this.state = {
      currentIndex,
      videoItemWidth,
      videosPerPage,
      length: 0,
    };
  }

  resize() {
    const docWidth = document.documentElement.clientWidth;
    const condition = Math.floor(docWidth / 330) === this.state.videosPerPage;
    if (!condition) {
      this.state.videosPerPage = Math.floor(docWidth / 330);
    }
  }

  getVideosFirst(searchTerm, callback) {
    super.getResp(searchTerm, false)
      .then(({ items: videos }) => {
        callback({ videos, length: this.state.length });
        this.state.length += 15;
      });
  }

  getVideosNext(callback) {
    super.getResp('', true)
      .then(({ items: videos }) => {
        callback({ videos, length: this.state.length });
        this.state.length += 15;
      });
  }

  slideVideos(direction = 'same', callback) {
    switch (direction) {
      case 'next': {
        const index = this.state.currentIndex + this.state.videosPerPage;
        this.state.currentIndex = index;
        const howClose = this.state.length - index;
        const timeToLoad = 2 * this.state.videosPerPage + 1;
        document.querySelector('.video-list').style.marginLeft = `-${index * this.state.videoItemWidth}px`;
        document.querySelector('.video-numbers ul').style.marginLeft = `-${index * 20}px`;
        if (howClose < timeToLoad) {
          this.getVideosNext(callback);
        }

        break;
      }
      case 'prev': {
        if (!(this.state.currentIndex === 0)) {
          let index = this.state.currentIndex - this.state.videosPerPage;
          if (index < 0) {
            index = 0;
          }
          this.state.currentIndex = index;
          document.querySelector('.video-list').style.marginLeft = `-${index * this.state.videoItemWidth}px`;
          document.querySelector('.video-numbers ul').style.marginLeft = `-${index * 20}px`;
        }
        break;
      }
      default: {
        break;
      }
    }
  }

  unify(e) {
    return e.changedTouches ? e.changedTouches[0] : e;
  }

  lock(e) {
    this.x0 = this.unify(e).clientX;
  }

  move(e, callback) {
    if (this.x0 || this.x0 === 0) {
      const dx = this.unify(e).clientX - this.x0;
      const direction = dx > 0 ? 'prev' : 'next';
      this.slideVideos(direction, callback);
    }
  }
}

export default AppController;
