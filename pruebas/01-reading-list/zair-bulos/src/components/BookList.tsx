import { useBooks } from "../hooks/useBooks";
import BookItem from "./BookItem";
import UserBookItem from "./UserBookItem";

function BookList() {
  const { filteredBooks, userBooks } = useBooks();

  return (
    <div className="flex justify-between gap-4 sm:p-8 md:p-8 lg:p-8 p-4">
      {/* Avaible Books */}
      <div>
        <h2 className="md:text-2xl lg:text-2xl text-base font-semibold mb-2">
          Libros disponibles ({filteredBooks.length})
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredBooks.map((book) => (
            <BookItem key={book.ISBN} book={book} />
          ))}
        </div>
      </div>

      {/* User Books */}
      <div className="bg-zinc-950 border border-white rounded-md p-4 sm:p-8 h-full">
        <h2 className="md:text-2xl lg:text-2xl text-base text-center font-semibold mb-2">
          Lista de lectura ({userBooks.length})
        </h2>
        {userBooks.length <= 0 ? (
          <p className="text-sm text-gray-300 text-justify">
            No hay libros en tu lista de lectura
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
            {userBooks.map((book) => (
              <UserBookItem key={book.ISBN} book={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default BookList;
