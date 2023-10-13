import { useBooks } from "../hooks/useBooks";

function BookList() {
  const { books } = useBooks();

  return (
    <>
      {books.map(book =>
        <p key={book.ISBN}>
          {book.title}
        </p>  
      )}
    </>
  );
}

export default BookList;