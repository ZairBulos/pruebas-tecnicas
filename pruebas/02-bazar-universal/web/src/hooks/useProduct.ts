import { useState } from "react";
import { Product } from "../types/product";
import { getById } from "../services/products";

const initialValue = {
  id: 1,
  title: "iPhone 9",
  description: "An apple mobile which is nothing like apple",
  price: 549,
  discountPercentage: 12.96,
  rating: 4.69,
  stock: 94,
  brand: "Apple",
  category: "smartphones",
  thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  images: [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  ],
};

export const useProduct = () => {
  const [data, setData] = useState<Product>(initialValue);
  const [loading, setLoading] = useState<boolean>(false);

  const findById = async (id: number) => {
    setLoading(true);
    const newData = await getById(id);
    setData(newData);
    setLoading(false);
  };

  return {
    data,
    loading,
    findById,
  };
};
