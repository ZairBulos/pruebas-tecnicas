import { API_URL } from "../constants";
import { Product } from "../types/product";

export const getByQuery = async (query: string): Promise<Product[]> => {
  const res = await fetch(`${API_URL}?q=${query}`);
  const data = (await res.json()) as Product[];
  return data;
};


export const getById = async (id: number): Promise<Product> => {
  const res = await fetch(`${API_URL}/${id}`);
  const data = (await res.json()) as Product;
  return data;
};