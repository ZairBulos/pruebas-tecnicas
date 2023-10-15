import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProduct";
import ProductItem from "../components/ProductItem";
import Header from "../components/Header";

function Product() {
  const { id } = useParams<{ id: string }>();
  const { data, findById } = useProduct();

  useEffect(() => {
    if (id) {
      findById(Number(id));
    }
  }, [id]);

  return (
    <main className="p-10 justify-center items-center h-full">
      <Header />
      <section>
        <ProductItem product={data} />
      </section>
      <section className="text-center">
        <button className="px-8 py-2 mt-4 bg-red-400 hover:bg-red-500 text-black rounded-full">
          Comprar
        </button>
      </section>
    </main>
  );
}

export default Product;
