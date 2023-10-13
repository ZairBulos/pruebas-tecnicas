import { useBooks } from "../hooks/useBooks";

function BookList() {
  const { filteredBooks } = useBooks();

  return (
    <>
      {filteredBooks.map(book =>
        <p key={book.ISBN}>
          {book.title}
        </p>  
      )}
    </>
  );
}

export default BookList;