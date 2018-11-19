import Main from './src/components/Main/Main';
import SearchForm from './src/components/SearchForm/SearchForm';

const main = new Main();
const searchForm = new SearchForm();

main.elem.appendChild(searchForm.elem);
document.body.appendChild(main.elem);
