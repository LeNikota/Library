const addBookBtn = document.querySelector('.add-book');
const bookMenu = document.querySelector('.book-menu');
const overlay = document.querySelector('.overlay');
const bookForm = document.querySelector('.book-form');
const booksContainer = document.querySelector('.books-container');
const submit = document.querySelector('.submit');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const pagesInput = document.getElementById('pages');
const readInput = document.getElementById('read');

const userLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function toggleBookMenu() {
  bookMenu.classList.toggle('active');
  overlay.classList.toggle('active');
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

function removeBook(event) {
  userLibrary.splice(event.target.dataset.index, 1);
  updateBooksDisplay();
}

function toggleReadStatus(event) {
  const i = event.target.dataset.index;
  userLibrary[i].read = !userLibrary[i].read;
}

function updateBooksDisplay() {
  resetBooksDisplay();
  userLibrary.forEach((e, i) => {
    const bookCard = document.createElement('div');
    const title = document.createElement('h4');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('input');
    const removeBtn = document.createElement('button');

    bookCard.classList.add('books-card');
    removeBtn.classList.add('remove');

    removeBtn.setAttribute('type', 'button');
    removeBtn.setAttribute('data-index', i);
    read.setAttribute('type', 'checkbox');
    read.setAttribute('name', 'read');
    read.setAttribute('data-index', i);
    if (e.read) read.setAttribute('checked', 'checked');

    title.textContent = e.title;
    author.textContent = e.author;
    pages.textContent = `Pages: ${e.pages}`;
    removeBtn.textContent = 'Remove';

    removeBtn.addEventListener('click', removeBook);
    read.addEventListener('click', toggleReadStatus);

    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);
    bookCard.appendChild(removeBtn);

    booksContainer.appendChild(bookCard);
  });
}

function addBookToLibrary(e) {
  e.preventDefault();
  if (!checkValidity()) {
    bookForm.reportValidity();
    return;
  }
  userLibrary.push(retrieveFormData());
  updateBooksDisplay();
  toggleBookMenu();
  bookForm.reset();
}

function checkValidity() {
  if (titleInput.validity.valueMissing || titleInput.validity.tooLong) {
    titleInput.setCustomValidity('Title must be within range of 1-30 characters.');
    return false;
  }
  titleInput.setCustomValidity('');

  if (authorInput.validity.valueMissing || authorInput.validity.tooLong) {
    authorInput.setCustomValidity('Author must be within range of 1-30 characters.');
    return false;
  }
  authorInput.setCustomValidity('');

  if (pagesInput.validity.valueMissing || pagesInput.validity.tooLong) {
    pagesInput.setCustomValidity('Pages must be within range of 1-10 numerical characters.');
    return false;
  }
  pagesInput.setCustomValidity('');

  return true;
}

addBookBtn.addEventListener('click', toggleBookMenu);
overlay.addEventListener('click', toggleBookMenu);
submit.addEventListener('click', addBookToLibrary);

window.onload = () => {
  userLibrary.push(new Book("You Don't Know JS Yet", 'Kyle Simpson', '279', true));
  updateBooksDisplay();
};
