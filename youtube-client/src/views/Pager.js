class Pager {
  constructor() {
    const pager = document.createElement('div');
    pager.className = 'pager';
    document.querySelector('.wrapper').appendChild(pager);
  }

  draw(pages) {
    const fragment = document.createDocumentFragment();

    const prevButton = document.createElement('button');
    prevButton.classList.add('prev');
    prevButton.textContent = 'prev';

    const nextButton = document.createElement('button');
    nextButton.classList.add('next');
    nextButton.textContent = 'next';

    const videoNumbers = document.createElement('div');
    videoNumbers.className = 'video-numbers';
    pages.forEach((x) => {
      const num = document.createElement('span');
      num.textContent = x;
      videoNumbers.appendChild(num);
    });

    fragment.appendChild(prevButton);
    fragment.appendChild(videoNumbers);
    fragment.appendChild(nextButton);

    document.querySelector('.pager').innerHTML = '';
    document.querySelector('.pager').appendChild(fragment);
  }
}

export default Pager;
