import express from "express";
import { swaggerServe, swaggerSetup } from "./config/swagger";

import booksRouter from "./api/books";

const app = express();
const PORT = 5000;

app.use("/api-docs", swaggerServe, swaggerSetup);

app.use("/books", booksRouter);

app.get("/", (req, res) => {
  res.json("Swagger Reference");
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}/`)
);
