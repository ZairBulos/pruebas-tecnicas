import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";

function Header() {
  return (
    <header className="flex flex-row justify-center items-center gap-4">
      <Link to="/">
        <img src="/logo.png" alt="Bazar Online" className="h-16" />
      </Link>
      <SearchForm />
    </header>
  );
}

export default Header;
