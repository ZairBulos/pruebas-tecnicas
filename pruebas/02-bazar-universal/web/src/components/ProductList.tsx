import { Product } from "../types/product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
}

function ProductList({ products }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {products.map(product =>
        <ProductCard key={product.id} product={product} />
      )}
    </div>
  );
}

export default ProductList;