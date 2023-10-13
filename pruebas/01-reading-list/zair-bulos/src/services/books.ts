import booksData from "../mocks/books.json";
import { Book } from "../types/book";

export const getBooks = (): Book[] => {
  const books = booksData.library.map((item) => item.book);
  return books;
};

export const getMinPages = (): number => {
  const books = booksData.library.map((item) => item.book);
  return Math.min(...books.map((book) => book.pages), Infinity);
};

export const getMaxPages = (): number => {
  const books = booksData.library.map((item) => item.book);
  return Math.max(...books.map((book) => book.pages), -Infinity);
};

export const getGenres = (): string[] => {
  const books = booksData.library.map((item) => item.book);
  const genres = books.map(({ genre }) => genre);
  return [...new Set(genres)];
};