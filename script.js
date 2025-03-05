const library  = [];

function Book(title, author, pages, desc){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.desc = desc;
    this.id = crypto.randomUUID();
}

function addBooktoLibrary(title, author, pages, desc){
    let bookObj = new Book(title, author, pages, desc);
    library.push(bookObj);
}

addBooktoLibrary('Harry Potter', 'JK Rowling', 500, 'Book about wizards and magic.' );

addBooktoLibrary('Percy Jackson', 'Aston Pierce', 400, 'Book about greek gods and mythology.' );

addBooktoLibrary('Goose Bumps', 'Bob Parson', 400, 'Book about paranormal activities.' );

function displayBooks(){
    const display = document.querySelector('.display');
    library.forEach( (element) =>{
        let bookTitle = document.createElement('div');
        bookTitle.textContent = element.title;
        display.appendChild(bookTitle);
    })
}

displayBooks();

