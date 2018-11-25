class VideoList {
  constructor() {
    const videoList = document.createElement('div');
    videoList.className = 'carusel';
    document.querySelector('.wrapper').appendChild(videoList);
    const docWidth = document.documentElement.clientWidth;
    const width = `${docWidth - (docWidth % 330)}px`;
    document.querySelector('.carusel').style.width = width;
    const ul = document.createElement('ul');
    ul.className = 'video-list';
    document.querySelector('.carusel').appendChild(ul);
  }

  draw({ videos, length }) {
    const fragment = document.createDocumentFragment();
    const videoItemTemp = document.querySelector('#videoItemTemp');
    const videoNumbers = document.querySelector('.video-numbers ul');
    videos.forEach((video, i) => {
      const li = document.createElement('li');
      li.textContent = length + i + 1;
      videoNumbers.appendChild(li);

      const videoClone = videoItemTemp.content.cloneNode(true);

      const videoImage = videoClone.querySelector('.video__item-image');
      videoImage.src = video.snippet.thumbnails.medium.url;
      videoImage.alt = video.snippet.title;

      const videoTitle = videoClone.querySelector('.video__item-title');
      const anchor = document.createElement('a');
      anchor.href = `https://www.youtube.com/watch?v=${video.id}`;
      anchor.textContent = video.snippet.title;
      anchor.target = '_blanc';
      videoTitle.appendChild(anchor);

      const videoViews = videoClone.querySelector('.video__item-views');
      videoViews.textContent = `${video.statistics.viewCount} views`;

      const videoOwner = videoClone.querySelector('.video__item-owner');
      videoOwner.textContent = `Author: ${video.snippet.channelTitle}`;

      const videoPublished = videoClone.querySelector('.video__item-published');
      videoPublished.textContent = `Published at: ${video.snippet.publishedAt}`;

      const videoDescription = videoClone.querySelector('.video__item-description');
      videoDescription.textContent = video.snippet.description;

      fragment.appendChild(videoClone);

      document.querySelector('.video-list').appendChild(fragment);
    });
  }
}

export default VideoList;
