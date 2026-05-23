const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// This checks if the .env file loaded. If not, it safely falls back to your local database string.
const dbURI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/rustik_plank";

mongoose.connect(dbURI)
  .then(() => console.log("Connected securely to MongoDB Rustik Plank DB"))
  .catch(err => console.error("Database connection error:", err));

  
// Product Schema & Model
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tag: { type: String, required: true },
  image: { type: String, required: true },
  discount: { type: Number, default: 0 },
  description: { type: String }
});

const Product = mongoose.model('Product', productSchema);

// REST API Endpoints
// GET: Fetch all products
app.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error fetching products" });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running smoothly on port ${PORT}`);
});
