import { useState } from "react";
import { Product } from "../types/product";
import { getByQuery } from "../services/products";

export const useProducts = () => {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const findByQuery = async (query: string) => {
    setLoading(true);
    const newData = await getByQuery(query);
    setData(newData);
    setLoading(false);
  };

  return {
    data,
    loading,
    findByQuery,
  };
};
