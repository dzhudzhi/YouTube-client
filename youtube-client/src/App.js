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
      this.controller.getVideosFirst(searchTerm, data => this.view.drawVideoList(data));
    });
    document.querySelector('.pager').addEventListener('click', (e) => {
      console.log(e.target.className);
      this.controller.showVideos(e.target.className, data => this.view.drawVideoList(data));
    });
  }
}

export default App;
