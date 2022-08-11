function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  .then(res => res.json())
  .then(books => renderBooks(books))
  
  /*2nd way to convert the data to json format, then call 2nd function 
  and passing in the json data as the argument.
  .then(function(response) {
    return response.json()
  }) 
  .then(function(books) {
    return renderBooks(books)
  })*/
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
