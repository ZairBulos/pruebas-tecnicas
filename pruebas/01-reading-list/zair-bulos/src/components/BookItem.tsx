import { useState } from "react";
import { Book } from "../types/book";
import BookModal from "./BookModal";
import { useBooks } from "../hooks/useBooks";

interface Props {
  book: Book;
  handleDragStart: (e: React.DragEvent<HTMLDivElement>, book: Book) => void;
}

function BookItem({ book, handleDragStart }: Props) {
  const { addBook } = useBooks();
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <div
        draggable
        data-isbn={book.ISBN}
        onDragStart={(e) => handleDragStart(e, book)}
      >
        <img
          src={book.cover}
          alt={book.title}
          draggable={false}
          onClick={toggleModal}
          className="md:h-56 lg:h-56 h-48 w-full cursor-pointer"
        />
      </div>
      {showModal && (
        <BookModal book={book} onClose={toggleModal} addBook={addBook} />
      )}
    </>
  );
}

export default BookItem;
