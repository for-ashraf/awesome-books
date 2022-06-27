/* form validation */

const submitBtn = document.getElementById('submit');

let books = [];

submitBtn.onclick = function (event) {
let book={
bookTitle: document.getElementById('bookTitle').value; 
bookAuthor: document.getElementById('bookAuthor').value; 
}
books.push(book);
document.form[0].reset();
console.log(books);
event.preventDefault();
};

