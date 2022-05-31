










const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker"
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason"
            },
            {
                title:"Pai rico, pai pobre",
                author:"Robert T. Kiyosaki e Sharon L. Lechter"
            }
        ]
    },
    {
        category: "Inteligência emocional",
        books:[
            {
                title:"Você é insubstituível",
                author:"Augusto Curry"
            },
            {
                title: "Ansiedade - Como enfrentar o mal do século",
                author:"Augusto Curry"
            },
            {
                title:"Os 7 hábitos das pessoas altamente eficazes",
                author:"Stephen R. Covey"
            }
        ]
    }
]

const totalCategory = booksByCategory.length
//Como eu fiz
//const totalBooksRiqueza= booksByCategory[0].books.length
//const totalBooksInteligencia = booksByCategory[1].books.length

//Professor fez
for(let category of booksByCategory){
    console.log("Total de livros na categoria:", category.category)
    console.log(category.books.length)
}

function countAuthors(){
    let authors=[]
    for(let category of booksByCategory){
        for(let books of category.books){
            if(authors.indexOf(books.author)==-1){
                authors.push(books.author)
            }
        }
    }
    console.log("Total de autores: ", authors.length) 
}
countAuthors()

function booksOfAugusto(){
    let books=[]
    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author==="Augusto Curry"){
                books.push(book.title)
            }
        }
    }
    console.log("Total de Livros Augusto Curry: ", books.length) 
}

booksOfAugusto()

function booksOfAuthor(author){
    let books=[]
    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author===author){
                books.push(book.title)
            }
        }
    }
    console.log(`Livros do author ${author}: ${books.join(", ")}`) 
}
booksOfAuthor("Augusto Curry")