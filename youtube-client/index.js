const data = {};

const searchForm = document.createElement('form');
const searchInput = document.createElement('input');
searchInput.type = 'text';
const searchButton = document.createElement('button');
searchButton.type = 'submit';
searchButton.innerHTML = 'search';

searchForm.appendChild(searchInput);
searchForm.appendChild(searchButton);
document.body.appendChild(searchForm);

const fetchVideos = ({ queryTerm, pageToken }) => {
  const keyParam = '&key=AIzaSyBNoCMgHdYGx70WFPH8ZcDsZclfC9fvzGw';
  const url = 'https://www.googleapis.com/youtube/v3/search?';
  const searchListParams = 'part=snippet&maxResults=15&order=viewCount';
  const qParam = `&q=${queryTerm}`;
  const pageTokenParam = pageToken ? `&pageToken${pageToken}` : '';
  const requestString = `${url}${searchListParams}${pageTokenParam}${qParam}${keyParam}`;
  return fetch(requestString).then(response => response.json());
};

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  fetchVideos({ queryTerm: searchInput.value })
    .then(({ items, nextPageToken }) => {
      data.queryTerm = searchInput.value;
      data.items = items;
      data.nextPageToken = nextPageToken;
      console.log(data);
    });
});

const nextButton = document.createElement('button');
nextButton.innerHTML = 'next';
nextButton.addEventListener('click', () => {
  fetchVideos({
    queryTerm: searchInput.value,
    pageToken: data.nextPageToken,
  })
    .then(({ items, nextPageToken }) => {
      data.items = data.items.concat(items);
      data.nextPageToken = nextPageToken;
      console.log(data);
    });
});

document.body.appendChild(nextButton);
