import { useEffect } from "react";
import { useLocation } from 'react-router-dom';

import { useProducts } from "../hooks/useProducts";
import Header from "../components/Header";
import ProductList from "../components/ProductList";

function Products() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('search');
  const { data, findByQuery } = useProducts();

  useEffect(() => {
    if (query) {
      findByQuery(query);
    }
  }, [query]);

  return (
    <main className="p-10 justify-center items-center h-full">
      <Header />
      <section className="py-4 text-center">
        <p className="text-gray-300 font-semibold">
          Resultados de búsqueda de "{query}": {data.length}
        </p>
      </section>
      <section>
        <ProductList products={data} />
      </section>
    </main>
  );
}

export default Products;
