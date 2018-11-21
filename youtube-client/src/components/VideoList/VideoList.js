import { getVideos } from '../../data/data';
import VideoListItem from './VideoListItem/VideoListItem';

class VideoList {
  constructor() {
    this.elem = document.createElement('div');
    this.elem.classList = 'video-list';
  }

  render() {
    const videos = getVideos();
    console.log('render');
    if (videos.length > 0) {
      const videoListItem = new VideoListItem(videos[0]);
      console.log(this);
      this.elem.appendChild(videoListItem.elem);

    }
  }
}

export default VideoList;
