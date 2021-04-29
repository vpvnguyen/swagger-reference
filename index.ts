import express from "express";
import swaggerMiddleware from "./middleware/swagger/swagger.middleware";
import booksRouter from "./api/Books/books.routes";

const app = express();
const PORT = 5000;

app.use("/docs", swaggerMiddleware);

app.use("/books", booksRouter);

app.get("/", (req, res) => {
  res.json("Swagger Reference");
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}/`)
);
