import { useBookContext } from "../contexts/BookContext";
import { getGenres, getMinPages, getMaxPages } from "../services/books";

export const useBooks = () => {
  const {
    books,
    userBooks,
    filteredBooks,
    addBook,
    removeBook,
    filterBooks
  } = useBookContext();

  const GENRES_TOLERANCE = getGenres();
  const MIN_PAGES_TOLERANCE = getMinPages();
  const MAX_PAGES_TOLERANCE = getMaxPages();

  return {
    books,
    userBooks,
    filteredBooks,
    addBook,
    removeBook,
    filterBooks,
    GENRES_TOLERANCE,
    MIN_PAGES_TOLERANCE,
    MAX_PAGES_TOLERANCE
  };
};
