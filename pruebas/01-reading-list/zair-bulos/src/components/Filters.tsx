import React, { useState } from "react";
import { useBooks } from "../hooks/useBooks";

function Filters() {
  const {
    GENRES_TOLERANCE,
    MIN_PAGES_TOLERANCE,
    MAX_PAGES_TOLERANCE,
    filterBooks }
    = useBooks();
  const [genre, setGenre] = useState<string>("");
  const [maxPages, setMaxPages] = useState<number>(MAX_PAGES_TOLERANCE);

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const genre = e.target.value;
    filterBooks(genre, maxPages);
    setGenre(genre);
  };

  const handleMaxPagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maxPages = parseInt(e.target.value, 10);
    filterBooks(genre, maxPages);
    setMaxPages(maxPages);
  };

  return (
    <>
      <div>
        <label htmlFor="genre">Filtrar por género</label>
        <select name="genre" onChange={handleGenreChange}>
          <option value="">Todos</option>
          {GENRES_TOLERANCE.map(genre =>
            <option value={genre} key={genre}>
              {genre}
            </option>
          )}
        </select>
      </div>
      <div>
        <label htmlFor="maxPages">Número de páginas</label>
        <input
          type="range"
          name="maxPages"
          value={maxPages}
          min={MIN_PAGES_TOLERANCE}
          max={MAX_PAGES_TOLERANCE}
          onChange={handleMaxPagesChange}
        />
        <span>Máximo: {maxPages}</span>
      </div>
    </>
  );
}

export default Filters;