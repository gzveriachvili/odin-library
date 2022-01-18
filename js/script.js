// THE PROBLEM: The user should be able to click a button that brings up a modal.
// Then on that modal the user should be able to input the title of the book, the author,
// the number of pages, and whether or not that particular book has been read yet.
// Then after inputting everything, the user should be able to press a button that will add the book to the library.
// The book should be displayed in the library as a card, containing all the inputted information.
// The card should also have a delete book button, and a toggle that allows the user to switch
// between "read" and "not read yet" states.

//  1. Does your program have a user interface?
//  What will it look like? What functionality will the interface have? Sketch this out on paper.

myLibrary = [];

const addButton = document.querySelector('.add-book-symbol');
const shelf = document.querySelector('.books-area');

addButton.addEventListener('mouseover', () => {
  addButton.classList.toggle('add-over');
});
addButton.addEventListener('mouseout', () => {
  addButton.classList.toggle('add-over');
});

const modal = document.querySelector('#libraryModal');

const span = document.querySelector('.close');

addButton.addEventListener('click', () => {
  modal.setAttribute('style', 'display:block');
});

span.addEventListener('click', () => {
  modal.setAttribute('style', 'display:none');
});

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.setAttribute('style', 'display:none');
  }
});

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book();
  newBook.title = title;
  newBook.author = author;
  newBook.pages = pages;
  newBook.read = read;
  myLibrary.push(newBook);
}

let i = -1;

function updateLibrary(title, author, pages, read) {
  i++;
  let card = document.createElement('div');
  card.classList.add('card');

  shelf.appendChild(card);
  let cardTop = document.createElement('div');

  cardTop.classList.add('card-top');
  card.appendChild(cardTop);
  let cardTitle = document.createElement('div');

  cardTitle.classList.add('card-title');
  cardTitle.textContent = title;
  cardTop.appendChild(cardTitle);
  let cardDelete = document.createElement('div');

  cardDelete.classList.add('card-delete');
  cardDelete.setAttribute(`data-index`, `${i}`);
  cardDelete.textContent = 'X';
  cardTop.appendChild(cardDelete);
  let cardAuthor = document.createElement('div');

  cardAuthor.classList.add('card-author');
  cardAuthor.textContent = author;
  card.appendChild(cardAuthor);
  let cardPages = document.createElement('div');

  cardPages.classList.add('card-pages');
  cardPages.textContent = pages;
  card.appendChild(cardPages);
  let cardBottom = document.createElement('div');

  cardBottom.classList.add('card-bottom');
  card.appendChild(cardBottom);
  let cardIsRead = document.createElement('div');
  cardIsRead.classList.add('card-isread');

  function convertRead(readit) {
    let newText = '';
    if (readit) {
      newText = 'Read it';
    } else {
      newText = 'Not read';
    }
    return newText;
  }

  let newRead = convertRead(read);

  cardIsRead.textContent = newRead;
  cardBottom.appendChild(cardIsRead);
  let cardToggle = document.createElement('div');

  cardToggle.classList.add('card-toggle');
  cardBottom.appendChild(cardToggle);
  let cardSwitch = document.createElement('label');

  cardSwitch.classList.add('switch');
  cardToggle.appendChild(cardSwitch);
  let cardCheckbox = document.createElement('input');

  cardCheckbox.setAttribute('type', 'checkbox');
  cardSwitch.appendChild(cardCheckbox);
  let cardSpan = document.createElement('span');

  cardSpan.classList.add('slider');

  cardSpan.classList.add('round');
  cardSwitch.appendChild(cardSpan);
}

function displayBooks() {
  for (const book of myLibrary) {
    updateLibrary(book.title, book.author, book.pages, book.read);
  }
}

Book.prototype.takeInput = function () {
  let inputTitle = document.querySelector('#title');
  let inputAuthor = document.querySelector('#author');
  let inputPages = document.querySelector('#pages');
  let inputisRead = document.querySelector('#isread');
  const submitBtn = document.querySelector('#submitbook');
  submitBtn.addEventListener('click', () => {
    addBookToLibrary(
      inputTitle.value,
      inputAuthor.value,
      inputPages.value,
      inputisRead.checked
    );
    updateLibrary(
      inputTitle.value,
      inputAuthor.value,
      inputPages.value,
      inputisRead.checked
    );
    modal.setAttribute('style', 'display:none');
  });
};

let book1 = new Book('Animal Farm', 'George Orwell', '130', 'true');
let book2 = new Book('The Shogun', 'James Clavell', '430', 'true');

myLibrary.push(book1, book2);

Book.prototype.takeInput();
displayBooks();

const deleteButton = document.querySelector('.card-delete');
let container = document.querySelectorAll('.books-area div');

Book.prototype.removeCard = function () {
  window.addEventListener('click', (e) => {
    if (e.path[0].classList.contains('card-delete')) {
      let n = e.path[0].getAttribute('data-index');
      console.log('Card index:', n);
      myLibrary.splice(n, 1);
      console.log('Remove? ', e.path[2]);
      shelf.removeChild(e.path[2]);
    }
  });
};

//removeCard();
Book.prototype.removeCard();
