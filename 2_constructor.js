function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

const book1 = new Book('Book 1', 'John Doe', 2013);
const book2 = new Book('Book 2', 'Jane Doe', 2016);

console.log(book1);
console.log(book2);