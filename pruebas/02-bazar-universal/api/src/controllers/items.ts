import express from "express";
const itemsRouter = express.Router();

import data from "../../products.json";
import Product from "../models/product";

const products: Product[] = data.products;

itemsRouter.get("/:id", (req, res) => {
  const id = Number(req.params.id);

  const item = products.find((item) => item.id === id);

  item ? res.json(item) : res.status(404).json({ error: "product not found" });
});

itemsRouter.get("/", (req, res) => {
  const query = String(req.query.q);
  console.log(query);
  

  if (!query) {
    return res.status(400).json({ error: "query param not provided" });
  }

  const items = products.filter((item) => {
    return (
      item.title.toLowerCase().includes(query.toLowerCase()) ||
      item.category.toLowerCase().includes(query.toLowerCase())
    );
  });

  res.json(items);
});

export default itemsRouter;
