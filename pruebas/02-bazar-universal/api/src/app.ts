import express from "express";
import cors from "cors";
import middlawere from "./utils/middlawere";
import itemsRouter from "./controllers/items";

const app = express();

app.use(cors());
app.use(express.json());
app.use(middlawere.requestLogger);

app.use("/api/items", itemsRouter);

export default app;