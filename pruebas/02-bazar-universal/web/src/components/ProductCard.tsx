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
      <div className="w-full max-w-sm border rounded-lg shadow bg-zinc-900 border-zinc-700 flex flex-col h-full hover:opacity-90">
        <img
          src={product.thumbnail}
          alt={product.title}
          onError={(e) => {
            const img = e.target as HTMLImageElement;
            img.src =
              "/no-image-available.png";
          }}
          className="p-4 rounded-t-lg h-52 w-full"
        />
        <div className="px-4 pb-4 flex flex-col h-full">
          <h5 className="text-xl font-semibold tracking-tight text-white mb-1">
            {product.title}
          </h5>
          <p className="text-sm text-justify text-gray-300 flex-1">
            {product.description}
          </p>
          <div className="flex items-center py-2">
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
