import React, { createContext, useContext, useEffect, useState } from "react";
import { getBooks } from "../services/books";
import { Book } from "../types/book";

type BookContextType = {
  books: Book[];
  userBooks: Book[];
  addBook: (book: Book) => void;
  removeBook: (book: Book) => void;
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
      } else {
        const newBooks = getBooks();
        setBooks(newBooks);
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
    const updatedBooks = books.filter((b) => b !== book);
    const updatedUserBooks = [...userBooks, book];

    setBooks(updatedBooks);
    setUserBooks(updatedUserBooks);

    localStorage.setItem("books", JSON.stringify(updatedBooks));
    localStorage.setItem("userBooks", JSON.stringify(updatedUserBooks));
  };

  const removeBook = (book: Book) => {
    const updatedUserBooks = userBooks.filter((b) => b !== book);
    const updatedBooks = [...books, book];

    setUserBooks(updatedUserBooks);
    setBooks(updatedBooks);

    localStorage.setItem("books", JSON.stringify(updatedBooks));
    localStorage.setItem("userBooks", JSON.stringify(updatedUserBooks));
  };

  return (
    <BookContext.Provider
      value={{
        books,
        userBooks,
        addBook,
        removeBook
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
