import express, { Request, Response } from "express";

const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.json("Swagger Reerence");
});

app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}/`)
);
