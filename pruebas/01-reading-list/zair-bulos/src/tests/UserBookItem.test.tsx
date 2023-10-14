import { describe, test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";

import UserBookItem from "../components/UserBookItem";
import BookProvider from "../contexts/BookContext";

describe("<UserBookItem />", () => {
  test("should show modal when image is clicked", () => {
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
      }
    };

    render(
      <BookProvider>
        <UserBookItem book={book} />
      </BookProvider>
    );

    expect(screen.queryByText("El Señor de los Anillos")).toBeNull();

    const image = screen.getByAltText("El Señor de los Anillos");
    fireEvent.click(image);

    expect(screen.queryByText("El Señor de los Anillos")).toBeInTheDocument();
    expect(screen.queryByText("Una aventura épica en un mundo de fantasía llamado la Tierra Media.")).toBeInTheDocument();
    expect(screen.queryByText("1954")).toBeInTheDocument();
    expect(screen.queryByText("Fantasía")).toBeInTheDocument();
    expect(screen.queryByText("J.R.R. Tolkien")).toBeInTheDocument();
  });
});
