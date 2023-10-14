import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import BookList from "../components/BookList";
import BookProvider from "../contexts/BookContext";

describe("<BookList />", () => {
  test("should render two list of books", () => {
    render(
      <BookProvider>
        <BookList />
      </BookProvider>
    );

    expect(screen.getAllByText("Libros disponibles (13)").length).toBe(1);
    expect(screen.getAllByText("Lista de lectura (0)").length).toBe(1);
  });
});