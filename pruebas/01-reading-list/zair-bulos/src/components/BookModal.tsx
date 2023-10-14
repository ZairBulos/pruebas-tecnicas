import Bookmark from "../assets/Bookmark";
import BookmarkOff from "../assets/BookmarkOff";
import { Book } from "../types/book";

interface Props {
  book: Book;
  onClose: () => void;
  addBook?: (book: Book) => void;
  removeBook?: (book: Book) => void;
}

function BookModal({ book, onClose, addBook, removeBook }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-gray-800 opacity-50"
        onClick={onClose}
      />
      <div className="bg-zinc-900 p-2 sm:text-base md:text-base lg:text-base text-sm rounded-lg z-10 flex lg:max-w-screen-sm w-[90%] md:max-w-screen-sm max-h-full">
        <div className="w-full sm:w-1/2 p-2 flex-col justify-center items-center">
          <img
            src={book.cover}
            alt={book.title}
            className="sm:h-80 md:h-80 lg:h-80 h-48 items-center justify-center"
          />
        </div>
        <div className="w-full sm:w-1/2 p-2 flex-col justify-center items-center">
          <h5 className="text-xl font-semibold mb-2 border-b border-gray-300">
            {book.title}
          </h5>
          <p className="mb-2 text-justify">{book.synopsis}</p>
          <p className="mb-2">
            <b className="text-gray-300">Año:</b>
            <span className="ms-1">{book.year}</span>
          </p>
          <p className="mb-2">
            <b className="text-gray-300">Género:</b>
            <span className="ms-1">{book.genre}</span>
          </p>
          <p className="mb-4">
            <b className="text-gray-300">Autor:</b>
            <span className="ms-1">{book.author.name}</span>
          </p>
          {addBook && (
            <button
              type="button"
              onClick={() => addBook(book)}
              className="border border-gray-100 rounded-full p-2 text-sm hover:bg-zinc-600"
            >
              <Bookmark />
            </button>
          )}
          {removeBook && (
            <button
              type="button"
              onClick={() => removeBook(book)}
              className="border border-gray-100 rounded-full p-2 text-sm hover:bg-zinc-600"
            >
              <BookmarkOff />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default BookModal;
