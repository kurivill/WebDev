import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Book from './BookComponent/Book.jsx'
import booksData from './BookComponent/booksData'
import './BookComponent/Book.css'

function App() {
  return (
    <div className="App">
      <h1>Book List</h1>
      <div className="book-list">
  {booksData.map(book => <Book key={book.id}  book={book} name="Matti"/>)} 
      </div>
    </div>
  );
  
}

export default App
