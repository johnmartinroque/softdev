const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;
const todoRoutes = require("./routes/todoRoutes");

// Enable JSON parsing
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/todos", todoRoutes);

// Import Prisma client
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Routes

// Home
app.get("/", (req, res) => {
  res.send("Hello from Express");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
