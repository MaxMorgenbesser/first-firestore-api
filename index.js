import express from "express";
import { getAllCars } from "./src/cars.js";
const app = express();
const PORT = 3002;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Express is workin");
});

app.get("/cars", getAllCars)

// put our routes
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}...`);
});
