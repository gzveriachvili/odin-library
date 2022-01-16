// THE PROBLEM: The user should be able to click a button that brings up a modal.
// Then on that modal the user should be able to input the title of the book, the author,
// the number of pages, and whether or not that particular book has been read yet.
// Then after inputting everything, the user should be able to press a button that will add the book to the library.
// The book should be displayed in the library as a card, containing all the inputted information.
// The card should also have a delete book button, and a toggle that allows the user to switch
// between "read" and "not read yet" states.

//  1. Does your program have a user interface?
//  What will it look like? What functionality will the interface have? Sketch this out on paper.

const addButton = document.querySelector('.add-book-symbol');
addButton.addEventListener('mouseover', () => {
  addButton.classList.toggle('add-over');
});
addButton.addEventListener('mouseout', () => {
  addButton.classList.toggle('add-over');
});

let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {}
