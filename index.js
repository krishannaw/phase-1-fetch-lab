function fetchBooks() {
  const url = 'https://anapioficeandfire.com/api/books';

  return fetch(url)
    .then(response => response.json())
    .then(data => renderBooks(data));
}

function renderBooks(books) {
  // Implementation of rendering the books goes here
  console.log(books);
}
