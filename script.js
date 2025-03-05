const library  = [];

function Book(title, author, pages, desc, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.desc = desc;
    this.id = crypto.randomUUID();
    this.read = read;
}

function addBooktoLibrary(title, author, pages, desc){
    let bookObj = new Book(title, author, pages, desc);
    library.push(bookObj);
}

//Dummy Data for Book Library
addBooktoLibrary('Harry Potter', 'JK Rowling', 500, 'Book about wizards and magic.', true );

addBooktoLibrary('Percy Jackson', 'Aston Pierce', 400, 'Book about greek gods and mythology.', true );

addBooktoLibrary('Goose Bumps', 'Bob Parson', 400, 'Book about paranormal activities.', false );

function displayBooks(){
    const display = document.querySelector('.display');
    const table = document.createElement('table');
    const caption = document.createElement('caption');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    display.append(table);
    table.appendChild(caption);
    caption.textContent = 'Books and the information';
    table.appendChild(thead);
    const headers = ['Book', 'Author', 'Pages', 'Description', 'ID', 'Read?']
    headers.forEach(element => {
        const th = document.createElement('th');
        th.textContent = element;
        thead.appendChild(th);
    });
    table.appendChild(tbody);
    library.forEach( (book) =>{
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        for (const property in book){
            const td = document.createElement('td');
            td.textContent = book[property];
            tr.appendChild(td);
        }
    })
}




displayBooks();

