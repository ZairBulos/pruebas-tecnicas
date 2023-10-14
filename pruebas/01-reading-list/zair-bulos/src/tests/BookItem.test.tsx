import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import BookProvider from "../contexts/BookContext";
import BookList from "../components/BookList";

describe("<BookItem />", () => {
  test("adds book to user list", () => {
    const book = {
      title: "El Señor de los Anillos",
      pages: 1200,
      genre: "Fantasía",
      cover:
        "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
      synopsis:
        "Una aventura épica en un mundo de fantasía llamado la Tierra Media.",
      year: 1954,
      ISBN: "978-0618640157",
      author: {
        name: "J.R.R. Tolkien",
        otherBooks: ["El Hobbit", "El Silmarillion"],
      },
    };

    render(
      <BookProvider>
        <BookList />
      </BookProvider>
    );

    const bookImage = screen.getByAltText(book.title);
    fireEvent.click(bookImage);

    const addButton = screen.getByTestId("add-book-button");
    fireEvent.click(addButton);

    expect(screen.getByText("Lista de lectura (1)")).toBeInTheDocument();
  });
});
