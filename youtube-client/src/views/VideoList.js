class VideoList {
  constructor() {
    const videoList = document.createElement('div');
    videoList.className = 'carusel';
    document.querySelector('.wrapper').appendChild(videoList);
  }

  draw(data) {
    const ul = document.createElement('ul');
    ul.className = 'video-list';
    const videoItemTemp = document.querySelector('#videoItemTemp');
    data.forEach((video) => {
      const videoClone = videoItemTemp.content.cloneNode(true);

      const videoImage = videoClone.querySelector('.video__item-image');
      videoImage.src = video.snippet.thumbnails.medium.url;
      videoImage.alt = video.snippet.title;

      const videoTitle = videoClone.querySelector('.video__item-title');
      videoTitle.textContent = video.snippet.title;

      const videoViews = videoClone.querySelector('.video__item-views');
      videoViews.textContent = video.statistics.viewCount;

      const videoOwner = videoClone.querySelector('.video__item-owner');
      videoOwner.textContent = video.snippet.channelTitle;

      const videoPublished = videoClone.querySelector('.video__item-published');
      videoPublished.textContent = video.snippet.publishedAt;

      const videoDescription = videoClone.querySelector('.video__item-description');
      videoDescription.textContent = video.snippet.description;

      ul.appendChild(videoClone);
    });

    document.querySelector('.carusel').innerHTML = '';
    document.querySelector('.carusel').appendChild(ul);
  }
}

export default VideoList;
