import { setQueryTerm } from '../../data/data';
import fetchVideos from '../../api/api';

class SearchForm {
  constructor() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    const searchButton = document.createElement('button');
    searchButton.type = 'submit';
    searchButton.innerHTML = 'search';
    this.elem = document.createElement('form');
    this.elem.appendChild(searchInput);
    this.elem.appendChild(searchButton);

    this.elem.addEventListener('submit', (e) => {
      e.preventDefault();
      setQueryTerm(searchInput.value);
      fetchVideos();
    });
  }
}

export default SearchForm;
