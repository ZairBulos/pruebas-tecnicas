import { useState } from "react";
import { Book } from "../types/book";
import BookModal from "./BookModal";
import { useBooks } from "../hooks/useBooks";

interface Props {
  book: Book;
}

function BookItem({ book }: Props) {
  const { addBook } = useBooks();
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <img
        src={book.cover}
        alt={book.title}
        onClick={toggleModal}
        loading="lazy"
        className="md:h-56 lg:h-56 h-48 w-full cursor-pointer"
      />

      {showModal && (
        <BookModal book={book} onClose={toggleModal} addBook={addBook} />
      )}
    </>
  );
}

export default BookItem;
