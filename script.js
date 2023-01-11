const addBookBtn = document.querySelector(".add-book");
const bookModuleContainer = document.querySelector(".book-module-container");
const overlay = document.querySelector(".overlay");
const bookForm = document.querySelector('.book-form');
const submit = document.querySelector(".submit");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const readInput = document.getElementById("read");

const userLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function toggleBookModule() {
  bookModuleContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

function retrieveFormData() {
  return new Book(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readInput.value,
  );
}

function addBookToLibrary(e) {
  userLibrary.push(retrieveFormData());
  toggleBookModule();
  bookForm.reset();
  e.preventDefault();
}

addBookBtn.addEventListener("click", toggleBookModule);
overlay.addEventListener("click", toggleBookModule);
submit.addEventListener("click", addBookToLibrary);
