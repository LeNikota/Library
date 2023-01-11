const addBookBtn = document.querySelector('#add-book');
const bookModuleContainer = document.querySelector('.book-module-container');
const overlay = document.querySelector('.overlay');

addBookBtn.addEventListener('click', toggleBookModal);
overlay.addEventListener('mousedown', toggleBookModal);

let userLibrary = [];

function Book() {}

function addBookToLibrary() {
}

function toggleBookModal() {
  bookModuleContainer.classList.toggle('active');
  overlay.classList.toggle('active');
}
