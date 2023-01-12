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

function addBooksToDisplay() {
  userLibrary.forEach((e) => {
    booksContainer.innerHTML += `
      <div class="books-card">
          <h4>${e.title}</h4>
          <p>${e.author}</p>
          <p>${e.pages}</p>
          <input type="checkbox" name="read" ${e.read ? 'checked' : ''}>
          <button type="button" class="remove" onclick="">Remove</button>
      </div>
    `;
  });
}

function addBookToLibrary(e) {
  userLibrary.push(retrieveFormData());
  addBooksToDisplay();
  toggleBookModule();
  bookForm.reset();
  e.preventDefault();
}

addBookBtn.addEventListener("click", toggleBookModule);
overlay.addEventListener("click", toggleBookModule);
submit.addEventListener("click", addBookToLibrary);
