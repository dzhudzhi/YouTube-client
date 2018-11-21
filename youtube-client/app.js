import Main from './src/components/Main/Main';
import SearchForm from './src/components/SearchForm/SearchForm';
import VideoList from './src/components/VideoList/VideoList';
import { subscribe } from './src/data/data';

const main = new Main();
const searchForm = new SearchForm();
const videoList = new VideoList();
subscribe(videoList.render.bind(videoList));

main.elem.appendChild(searchForm.elem);
main.elem.appendChild(videoList.elem);
document.body.appendChild(main.elem);
