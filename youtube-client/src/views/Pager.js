class Pager {
  constructor() {
    const pager = document.createElement('div');
    pager.className = 'pager';

    const prevButton = document.createElement('button');
    prevButton.classList.add('prev');
    prevButton.textContent = 'prev';

    const nextButton = document.createElement('button');
    nextButton.classList.add('next');
    nextButton.textContent = 'next';

    const videoNumbers = document.createElement('div');
    videoNumbers.className = 'video-numbers';
    const ul = document.createElement('ul');
    videoNumbers.appendChild(ul);

    pager.appendChild(prevButton);
    pager.appendChild(videoNumbers);
    pager.appendChild(nextButton);

    pager.style.visibility = 'hidden';

    document.querySelector('.wrapper').appendChild(pager);
  }

  draw() {
    document.querySelector('.pager').style.visibility = 'visible';
    const docWidth = document.documentElement.clientWidth;
    const width = `${Math.floor(docWidth / 330) * 20}px`;
    document.querySelector('.video-numbers').style.width = width;
  }
}

export default Pager;
