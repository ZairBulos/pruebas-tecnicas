import { useState } from "react";
import Search from "../assets/Search";
import { useNavigate } from "react-router-dom";

interface Props {
  showButton?: boolean;
}

function SearchForm({ showButton = false }: Props) {
  const navigate = useNavigate();
  const [search, setSearch] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (search.trim() !== "") {
      navigate(`/items?search=${search}`);
    } else {
      setError("Completa el campo");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative w-full">
        <input
          type="search"
          required
          value={search}
          placeholder="laptops, smartphones, ..."
          onChange={({ target }) => setSearch(target.value)}
          className="block p-2 px-4 w-full z-20 text-sm text-gray-900 bg-gray-100 rounded-r-lg focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
        />
        <button
          type="submit"
          className="absolute top-0 right-0 p-2 h-full text-sm font-medium text-black bg-gray-100"
        >
          <Search />
        </button>
      </div>
      {error && <p className="text-sm mt-1 text-red-500">{error}</p>}
      {showButton && (
        <button className="px-8 py-2 mt-4 bg-red-400 hover:bg-red-500 text-black rounded-full">
          Buscar
        </button>
      )}
    </form>
  );
}

export default SearchForm;
