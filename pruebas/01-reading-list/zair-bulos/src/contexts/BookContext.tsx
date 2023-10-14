import React, { createContext, useContext, useEffect, useState } from "react";
import { getBooks } from "../services/books";
import { toast } from 'react-toastify';
import { Book } from "../types/book";

type BookContextType = {
  books: Book[];
  userBooks: Book[];
  filteredBooks: Book[];
  addBook: (book: Book) => void;
  removeBook: (book: Book) => void;
  filterBooks: (genre: string, maxPages: number) => void;
};

const BookContext = createContext<BookContextType | null>(null);

export const useBookContext = () => {
  const context = useContext(BookContext);

  if (!context) {
    throw new Error("useBookContext must be used within a BookProvider");
  }

  return context;
};

const BookProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [userBooks, setUserBooks] = useState<Book[]>([]);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

  useEffect(() => {
    const storageEventListener = (event: StorageEvent) => {
      if (event.key === "books" && event.newValue) {
        const booksFromLS = JSON.parse(event.newValue);
        setBooks(booksFromLS);
      }

      if (event.key === "userBooks" && event.newValue) {
        const userBooksFromLS = JSON.parse(event.newValue);
        setUserBooks(userBooksFromLS);
      }
    };

    window.addEventListener("storage", storageEventListener);

    return () => {
      window.removeEventListener("storage", storageEventListener);
    };
  }, []);

  useEffect(() => {
    const initialBooks = () => {
      const storedBooks = localStorage.getItem("books");
      if (storedBooks) {
        const booksFromLS = JSON.parse(storedBooks);
        setBooks(booksFromLS);
        setFilteredBooks(booksFromLS);
      } else {
        const newBooks = getBooks();
        setBooks(newBooks);
        setFilteredBooks(newBooks);
        localStorage.setItem("books", JSON.stringify(newBooks));
      }

      const storedUserBooks = localStorage.getItem("userBooks");
      if (storedUserBooks) {
        const userBooksFromLS = JSON.parse(storedUserBooks);
        setUserBooks(userBooksFromLS);
      }
    };

    initialBooks();
  }, []);

  const addBook = (book: Book) => {
    const updatedUserBooks = [...userBooks, book];
    const updatedBooks = books.filter((b) => b.ISBN !== book.ISBN);

    setBooks(updatedBooks);
    setUserBooks(updatedUserBooks);
    setFilteredBooks(updatedBooks);

    localStorage.setItem("books", JSON.stringify(updatedBooks));
    localStorage.setItem("userBooks", JSON.stringify(updatedUserBooks));

    toast(`📘 "${book.title}" añadido a "lista de lectura"`);
  };

  const removeBook = (book: Book) => {
    const updatedUserBooks = userBooks.filter((b) => b.ISBN !== book.ISBN);
    const updatedBooks = [...books, book];

    setUserBooks(updatedUserBooks);
    setFilteredBooks(updatedBooks);
    setBooks(updatedBooks);

    localStorage.setItem("books", JSON.stringify(updatedBooks));
    localStorage.setItem("userBooks", JSON.stringify(updatedUserBooks));

    toast(`📕 "${book.title}" eliminado de "lista de lectura"`);
  };

  const filterBooks = (genre: string, maxPages: number) => {
    const filtered = books.filter(
      (book) => (genre === "" || book.genre === genre) && book.pages <= maxPages
    );
    setFilteredBooks(filtered);
  };

  return (
    <BookContext.Provider
      value={{
        books,
        userBooks,
        filteredBooks,
        addBook,
        removeBook,
        filterBooks,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
