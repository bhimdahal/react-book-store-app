import React, { useContext, useEffect, useState } from 'react';
import _ from 'lodash';
import Book from './Book';
import BooksContext from '../context/BooksContext';
//import {getAllBooks} from '../services/BookService';

const BooksList = () => {
  const [books, setBooks ] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
      fetch('http://localhost:8080/api/books')
        .then(response => response.json())
        .then(json => setBooks(json))
        .finally(() => {
        setLoading(false);
      })
    }, []);

  const handleRemoveBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <React.Fragment>
      <div className="book-list">
        {!_.isEmpty(books) ? (
          books.map((book) => (
            <Book key={book.id} {...book} handleRemoveBook={handleRemoveBook} />
          ))
        ) : (
          <p className="message">No books available. Please add some books.</p>
        )}
      </div>
    </React.Fragment>
  );
        
};

export default BooksList;
