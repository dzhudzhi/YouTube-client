class SearchForm {
  constructor() {
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';

    const searchInput = document.createElement('input');
    searchInput.type = 'text';

    const searchButton = document.createElement('button');
    searchButton.type = 'submit';
    searchButton.innerHTML = 'search';

    const searchForm = document.createElement('form');
    searchForm.classList.add('search-form');
    searchForm.appendChild(searchInput);
    searchForm.appendChild(searchButton);

    wrapper.appendChild(searchForm);
    document.body.appendChild(wrapper);
  }
}

export default SearchForm;
