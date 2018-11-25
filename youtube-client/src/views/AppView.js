import SearchForm from './SearchForm';
import VideoList from './VideoList';
import Pager from './Pager';

class AppView {
  constructor() {
    this.searchFrom = new SearchForm();
    this.videoList = new VideoList();
    this.pager = new Pager();
  }

  drawVideoList(data) {
    this.videoList.draw(data);
    this.pager.draw();
  }
}

export default AppView;
