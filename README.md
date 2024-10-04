# Virtual Book Library

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Objective

Create a virtual book library using **React.js**, allowing users to browse books, view detailed information about each book, and manage their personal library. The assignment is designed to test your understanding of React, component structure, state management, routing, and good coding practices.

## Assignment Requirements

### Pages

1. **Home Page (Book Listing)**:
   - Display a list of books with details such as title, author, genre, and rating.
   - The books should be displayed in a grid or list format with a search functionality to filter books by title, author, or genre.

2. **Book Details Page**:
   - When a book is clicked from the Home page, navigate to a detailed view page.
   - Display detailed information about the selected book, including title, author, genre, rating, description, and publication year.
   - Provide an option to add the book to the "My Library" collection.

3. **My Library Page**:
   - A separate page that shows the list of books the user has added to their personal library.
   - Users should be able to remove books from this collection.

### Features Implemented

- **Routing**: Implemented navigation between pages using `react-router-dom`.
- **State Management**: Used React's state management (`useState`, `useContext`) to handle the list of books and the user's personal library.
- **Reusable Components**: Created reusable components such as `BookCard`, `BookList`, and `SearchBar`.
- **Context API**: Ensured data is passed between components effectively, avoiding unnecessary prop drilling.
- **Form Handling**: Implemented a simple form for searching books.
- **Good Practices**: Followed component decomposition, organized folder structure (e.g., `components`, `pages`, `services`), utilized functional components and hooks, and adhered to DRY and clean code principles.

### JSON Data

Below is the JSON data used to populate the book library:

```json
{
  "books": [
    {
      "id": 1,
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "genre": "Classic",
      "rating": 4.7,
      "description": "A novel set in the Jazz Age that explores themes of wealth, love, and the American Dream.",
      "publication_year": 1925
    },
    {
      "id": 2,
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "genre": "Fiction",
      "rating": 4.8,
      "description": "A timeless novel of a child's moral awakening and a poignant tale of race and justice in the American South.",
      "publication_year": 1960
    },
    {
      "id": 3,
      "title": "1984",
      "author": "George Orwell",
      "genre": "Dystopian",
      "rating": 4.6,
      "description": "A dystopian social science fiction novel and cautionary tale about the dangers of totalitarianism.",
      "publication_year": 1949
    },
    {
      "id": 4,
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "genre": "Romance",
      "rating": 4.9,
      "description": "A romantic novel that also serves as a social commentary on the British landed gentry of the early 19th century.",
      "publication_year": 1813
    },
    {
      "id": 5,
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "genre": "Fiction",
      "rating": 4.3,
      "description": "A story about a young boy’s journey through the challenges of adolescence.",
      "publication_year": 1951
    }
  ]
}
