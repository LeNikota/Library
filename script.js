const addBookBtn = document.querySelector(".add-book");
const bookModuleContainer = document.querySelector(".book-module");
const overlay = document.querySelector(".overlay");
const bookForm = document.querySelector('.book-form');
const booksContainer = document.querySelector(".books-container");
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

function removeBook(e) {
  console.log(e)
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
    readInput.checked,
  );
}

function resetBooksDisplay() {
  booksContainer.innerHTML = '';
}

function updateBooksDisplay() {
  resetBooksDisplay();
  userLibrary.forEach((e) => {
    const bookCard = document.createElement('div');
    const title = document.createElement('h4');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('input');
    const removeBtn = document.createElement('button');

    bookCard.classList.add('books-card');
    removeBtn.classList.add('remove');

    removeBtn.setAttribute('type', 'button');
    read.setAttribute('type', 'checkbox');
    read.setAttribute('name', 'read');
    if (e.read) read.setAttribute('checked', 'checked');

    title.textContent = e.title;
    author.textContent = e.author;
    pages.textContent = e.pages;
    removeBtn.textContent = 'Remove';

    removeBtn.addEventListener('click', removeBook);

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);
    bookCard.appendChild(removeBtn);

    booksContainer.appendChild(bookCard);
  });
}

function validateInputs() {
  if (titleInput.value === '') {
    return true;
  }
  if (authorInput.value === '') {
    return true;
  }
  if (pagesInput.value === '') {
    return true;
  }
  return false;
}

function addBookToLibrary(e) {
  if (validateInputs()) return;
  userLibrary.push(retrieveFormData());
  updateBooksDisplay();
  toggleBookModule();
  bookForm.reset();
  e.preventDefault();
}

addBookBtn.addEventListener("click", toggleBookModule);
overlay.addEventListener("click", toggleBookModule);
submit.addEventListener("click", addBookToLibrary);
