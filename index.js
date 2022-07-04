import {
  booksContainer, form, list, addNew, contact, bookList, addBook, contacts,
} from './modules/fields.js';

const Books = require('./modules/Books.js');

const book = new Books();
book.showBooks();

/* Event Listeners */
bookList.addEventListener('click', (e) => {
  e.preventDefault();
  list.style.display = 'flex';
  addNew.style.display = 'none';
  contact.style.display = 'none';
});

addBook.addEventListener('click', () => {
  list.style.display = 'none';
  addNew.style.display = 'flex';
  contact.style.display = 'none';
});

contacts.addEventListener('click', () => {
  list.style.display = 'none';
  addNew.style.display = 'none';
  contact.style.display = 'flex';
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  book.updateBooks();
  form.reset();
});

booksContainer.addEventListener('click', (e) => {
  book.removeBook(e);
});

/* Insert Date */
document.getElementById('date').innerHTML = DateTime;
