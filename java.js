let forum = document.querySelector('.inputbox')
let addBooks = document.getElementById('addBooks')

let inputName = document.getElementById('name')
let inputAuthor = document.getElementById('author')
let inputPages = document.getElementById('pages')
let inputCPages = document.getElementById('currentPage')


let submitButton = document.getElementById('submit')

let isVisable = 'false'

function hide(){
    isVisable = 'false'
    forum.style.display = 'none'
    addBooks.textContent = '+'
}
addBooks.addEventListener('click', () => {
    if (isVisable === 'false'){
        isVisable = 'true'
        forum.style.display = 'inline'
        addBooks.textContent = 'X'
    } else {
        hide()
    }
});

let bookDiary = []

function book(name,author,pages,cPage){
    this.name = name
    this.author = author
    this.pages = pages
    this.cPage = cPage
}

function addBook(){

}

function restInputs(){
    inputName.value = ''
    inputAuthor.value = ''
    inputPages.value = ''
    inputCPages.value = ''
}

submitButton.addEventListener('click', () => {
    hide()
    let newBook = new book(inputName.value, inputAuthor.value, inputPages.value, inputCPages)
    bookDiary.push(newBook)
    restInputs()
})