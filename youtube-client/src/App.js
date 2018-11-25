import AppController from './controllers/AppController';
import AppView from './views/AppView';

class App {
  constructor() {
    this.controller = new AppController();
    this.view = new AppView();
  }

  start() {
    document.querySelector('.search-form').addEventListener('submit', (e) => {
      e.preventDefault();
      const searchTerm = e.target[0].value;
      document.querySelector('.video-list').innerHTML = '';
      this.controller.getVideosFirst(searchTerm, data => this.view.drawVideoList(data));
    });
    document.querySelector('.pager').addEventListener('click', (e) => {
      this.controller.slideVideos(e.target.className, data => this.view.drawVideoList(data));
    });
    window.addEventListener('resize', () => this.controller.resize());
    const carusel = document.querySelector('.carusel');
    carusel.addEventListener('mousedown', e => this.controller.lock(e));
    carusel.addEventListener('mouseup', e => this.controller.move(e, data => this.view.drawVideoList(data)));
    carusel.addEventListener('touchstart', e => this.controller.lock(e));
    carusel.addEventListener('touchmove', e => e.preventDefault());
    carusel.addEventListener('touchend', e => this.controller.move(e, data => this.view.drawVideoList(data)));
  }
}

export default App;
