import { useEffect, useState } from "react";
import { Product } from "../types/product";
import Star from "../assets/Star";

function ProductItem({ product }: { product: Product }) {
  const [mainImage, setMainImage] = useState<string>(product.thumbnail);
  const additionalImages = product.images.slice(1, 6);
  const roundRating = (rating: number) => Math.round(rating);

  const renderStars = (roundedRating: number) => {
    const stars = [];
    for (let i = 0; i < roundedRating; i++) {
      stars.push(<Star key={i} />);
    }
    return stars;
  };

  useEffect(() => {
    setMainImage(product.thumbnail);
  }, [product]);

  return (
    <div className="p-4 rounded-lg shadow-lg flex flex-col items-center justify-center">
      {/* Main Product Image */}
      <div className="mb-4">
        <img
          className="h-60 w-full rounded-lg object-cover"
          src={mainImage}
          alt={product.title}
        />
      </div>

      {/* Additional Images (in a single line) */}
      <div className="flex flex-wrap justify-center gap-2">
        {additionalImages.map((image) => (
          <div key={image} className="flex-shrink-0">
            <img
              className="h-24 w-24 rounded-lg object-cover hover:cursor-pointer"
              src={image}
              alt={product.title}
              onClick={() => setMainImage(image)}
            />
          </div>
        ))}
      </div>

      {/* Product Details */}
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
        <div className="flex justify-center items-center mb-2">
          <p className="text-xl font-semibold mr-2">${product.price}</p>
          {renderStars(roundRating(product.rating))}
        </div>
        <div>
          <p>{product.stock} disponibles</p>
        </div>
        <div className="mt-4">
          <p className="text-gray-300">{product.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
