import { Link } from "react-router-dom";
import SearchForm from "../components/SearchForm";

function Home() {
  return (
    <main className="flex items-center justify-center h-screen">
      <section className="text-center">
        <Link to="/">
          <img src="/bazar.png" alt="Bazar Online" className="h-56" />
        </Link>
        <h1 className="text-4xl font-bold leading-loose">Bazar Online</h1>
        <SearchForm showButton />
      </section>
    </main>
  );
}

export default Home;
