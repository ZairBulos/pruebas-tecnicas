import booksData from "../mocks/books.json";
import { Book } from "../types/book";

export const getBooks = (): Book[] => {
  const books = booksData.library.map(item => item.book);
  return books;
};