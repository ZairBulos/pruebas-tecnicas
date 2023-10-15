import { Link } from "react-router-dom";
import Star from "../assets/Star";
import { Product } from "../types/product";

function ProductCard({ product }: { product: Product }) {
  const roundRating = (rating: number) => Math.round(rating);

  const renderStars = (roundedRating: number) => {
    const stars = [];
    for (let i = 0; i < roundedRating; i++) {
      stars.push(<Star key={i} />);
    }
    return stars;
  };

  return (
    <Link to={`/items/${product.id}`}>
      <div className="w-full max-w-sm h-full border rounded-lg shadow bg-zinc-900 border-zinc-700">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="p-4 rounded-t-lg h-52 w-full"
        />
        <div className="px-4 pb-4">
          <h5 className="text-xl font-semibold tracking-tight text-white mb-2">
            {product.title}
          </h5>
          <p className="text-sm text-justify h-16 text-gray-300">
            {product.description}
          </p>
          <div className="flex items-center mt-2.5 mb-5">
            {renderStars(roundRating(product.rating))}
            <span className="text-xs font-semibold ml-2 px-2 py-1 rounded bg-blue-200 text-blue-800">
              {product.rating}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-white">
              ${product.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
