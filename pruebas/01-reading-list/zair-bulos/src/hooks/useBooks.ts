import { useBookContext } from "../contexts/BookContext";

export const useBooks = () => {
  const {
    books,
    userBooks,
    addBook,
    removeBook,
  } = useBookContext();

  return {
    books,
    userBooks,
    addBook,
    removeBook,
  };
};
