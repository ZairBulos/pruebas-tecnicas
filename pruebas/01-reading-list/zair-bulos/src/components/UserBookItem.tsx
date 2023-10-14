import { useState } from "react";
import { Book } from "../types/book";
import BookModal from "./BookModal";
import { useBooks } from "../hooks/useBooks";

interface Props {
  book: Book;
}

function UserBookItem({ book }: Props) {
  const { removeBook } = useBooks();
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <div className="relative">
        <button
          onClick={() => removeBook(book)}
          className="absolute top-0 right-0 bg-gray-500 hover:bg-red-500 text-white ps-2 pr-2 cursor-pointer"
        >
          x
        </button>
        <img
          src={book.cover}
          alt={book.title}
          draggable={false}
          onClick={toggleModal}
          className="sm:h-56 md:h-56 lg:h-56 h-48 w-full cursor-pointer"
        />
      </div>

      {showModal && (
        <BookModal book={book} onClose={toggleModal} removeBook={removeBook} />
      )}
    </>
  );
}

export default UserBookItem;
