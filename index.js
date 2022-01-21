function fetchBooks() {
// To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
  .then((res) => res.json())
  .then((books) => renderBooks(books))
}

function renderBooks(books) {
  console.log(books[4])
  
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
  //document.body.append(totalPages(books))
}


document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

let total = 0

function totalPages(books) {
  for(let book of books) {
    total += book.numberOfPages
  }
  return total
}

