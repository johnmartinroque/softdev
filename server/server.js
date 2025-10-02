const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

{
  /*
  
  const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

// Enable JSON parsing
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

// Import Prisma client
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Routes

// Home
app.get("/", (req, res) => {
  res.send("Hello from Express");
});

// Get all products
app.get("/products", async (req, res) => {
  const products = await prisma.product.findMany();
  res.json(products);
});

// Create a new product
app.post("/products", async (req, res) => {
  const { name, description, price } = req.body;

  try {
    const product = await prisma.product.create({
      data: { name, description, price },
    });
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Error creating product" });
  }
});

// Create multiple products
app.post("/products/bulk", async (req, res) => {
  const products = req.body; // Expecting an array of products

  try {
    const createdProducts = await prisma.product.createMany({
      data: products,
      skipDuplicates: true, // optional: avoid duplicate insertions
    });
    res.status(201).json(createdProducts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error creating products" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
*/
}
