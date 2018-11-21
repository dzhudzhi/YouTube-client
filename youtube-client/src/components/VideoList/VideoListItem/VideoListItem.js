class VideoListItem {
  constructor(video) {
    this.elem = document.createElement('div');
    this.elem.classList = 'video-list-item';
    const img = document.createElement('img');
    img.src = video.thumbnails.default.url;
    this.elem.appendChild(img);
    console.log(video);
  }
}

export default VideoListItem;
