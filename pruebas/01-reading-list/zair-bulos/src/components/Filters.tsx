import React, { useState } from "react";
import { useBooks } from "../hooks/useBooks";

function Filters() {
  const {
    GENRES_TOLERANCE,
    MIN_PAGES_TOLERANCE,
    MAX_PAGES_TOLERANCE,
    filterBooks,
  } = useBooks();
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
    <div className="flex gap-8 sm:p-8 md:p-8 lg:p-8 p-4">
      <div className="flex flex-col">
        <label htmlFor="maxPage" className="mb-2">
          Filtrar por páginas
        </label>
        <div className="flex items-center justify-center gap-2">
          <input
            id="maxPage"
            type="range"
            name="maxPage"
            value={maxPages}
            min={MIN_PAGES_TOLERANCE}
            max={MAX_PAGES_TOLERANCE}
            onChange={handleMaxPagesChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
          />
          <span className="text-gray-300">{maxPages}</span>
        </div>
      </div>
      <div className="flex flex-col">
        <label htmlFor="genre" className="mb-2">
          Filtrar por género
        </label>
        <select
          name="genre"
          id="genre"
          onChange={handleGenreChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Todos</option>
          {GENRES_TOLERANCE.map((genre) => (
            <option value={genre} key={genre}>
              {genre}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filters;
