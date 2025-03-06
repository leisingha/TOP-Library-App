const library  = [];

function Book(title, author, pages, desc, read, remove){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.desc = desc;
    this.id = crypto.randomUUID();
    this.read = read;
    this.remove = null;
}

Book.prototype.toggleReadStatus = function(bool){
    this.read = bool;
}


function addBooktoLibrary(title, author, pages, desc, read, remove){
    let bookObj = new Book(title, author, pages, desc, read, remove);
    library.push(bookObj);
}

function removeBookfromLibrary(id){
    library.forEach(book =>{
        if(id == book.id){
            library.splice(library.indexOf(book), 1);
        }
    })
}

//Dummy Data for Book Library
addBooktoLibrary('Harry Potter', 'JK Rowling', 500, 'Book about wizards and magic.', true, null );

addBooktoLibrary('Percy Jackson', 'Aston Pierce', 400, 'Book about greek gods and mythology.', false, null );

addBooktoLibrary('Goose Bumps', 'Bob Parson', 400, 'Book about paranormal activities.', true, null );

function displayBooks(){
    const display = document.querySelector('.display');
    const table = document.createElement('table');
    const caption = document.createElement('caption');
    const thead = document.createElement('thead');
    const tbody = document.createElement('tbody');

    
    display.prepend(table);
    table.appendChild(caption);
    caption.textContent = 'Books currently in the Library 📚';
    table.appendChild(thead);
    const headers = ['Book', 'Author', 'Pages', 'Description', 'ID', 'Read?', 'Delete']
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
            if(book.hasOwnProperty(property)){
                const td = document.createElement('td');
                switch (property){
                    case 'remove':
                        const svg = document.createElement('img');
                        const btn = document.createElement('button');
                        btn.dataset.uniqueID = book.id;
                        svg.src = 'assets/trash.svg'
                        btn.appendChild(svg);
                        btn.addEventListener('click', () => {
                            removeBookfromLibrary(btn.dataset.uniqueID);
                            removeTable();
                            displayBooks();
                        });
                        td.appendChild(btn);
                        tr.appendChild(td);
                        break;
                    case 'read':
                        const checkBtn = document.createElement('input');
                        checkBtn.type = 'checkbox';
                        checkBtn.checked = book.read;
                        checkBtn.addEventListener('click', () => {
                            book.toggleReadStatus(checkBtn.checked);
                            console.log(book);
                        });
                        td.appendChild(checkBtn);
                        tr.appendChild(td);
                        break;
                    default:
                        td.textContent = book[property];
                        tr.appendChild(td);
                        break;
                }
            }           
        }
    })
    
    
}

function displayForm(){
    const display = document.querySelector('.display');
    const dialog = document.querySelector('#dialog-box');
    const form = document.querySelector('#book-form');
    const addBtn = document.querySelector('.add-btn');
    const btnConfirm = document.querySelector('#btn-confirm');
    const btnCancel = document.querySelector('#btn-cancel');


    addBtn.addEventListener('click', ()=>{
        dialog.showModal();
    })

    dialog.addEventListener('close', (e)=>{
        
    })

    btnConfirm.addEventListener('click', (e)=>{
        e.preventDefault()

        const formdata = new FormData(form);
        data = Object.fromEntries(formdata.entries());


        addBooktoLibrary(data['book-name'], data['author-name'], data['page-num'], data['desc'], data['read-staus'], null);
        removeTable();
        displayBooks();
        console.log(library);

        dialog.close();
    })

    btnCancel.addEventListener('click', ()=>{
        dialog.close();
    })
    
}

function removeTable(){
    const table = document.querySelector('table');
    table.remove();
}

displayForm();
displayBooks();


   

