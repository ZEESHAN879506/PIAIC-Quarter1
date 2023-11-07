// Define a Book interface
interface Book {
    title: string;
    author: string;
    year: number;
  }
  
  // Create an array of book objects
  let books: Book[] = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813 },
    { title: "1984", author: "George Orwell", year: 1949 }
  ];
  
  // Print the books
  console.log(books);
  