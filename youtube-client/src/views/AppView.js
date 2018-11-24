import SearchForm from './SearchForm';
import VideoList from './VideoList';
import Pager from './Pager';

class AppView {
  constructor() {
    this.searchFrom = new SearchForm();
    this.videoList = new VideoList();
    this.pager = new Pager();
  }

  drawVideoList({ videos, pages }) {
    this.videoList.draw(videos);
    this.pager.draw(pages);
  }
}

export default AppView;
