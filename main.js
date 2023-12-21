const myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.data = function () {
    return `${this.title},${this.author},${this.pages},${this.read}`;
  };
  //constructor
}

function addBookToLibrary() {
  //do stuff
  //a way to get input let size = parseInt(document.querySelector(".input-field").value, 10);
  let b1 = new Book("something", "someone", 150, true);
  myLibrary.push(b1.data());
  //create a dict that associates the reader with the books
}

let s = addBookToLibrary();
console.log("h");
console.log(myLibrary);
