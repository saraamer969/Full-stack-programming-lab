const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const productRoutes = require('./routes/products');

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/ecommercedb')
  .then(() => console.log('✅ MongoDB Connected'))
  .catch(err => console.log('❌ Error:', err));

app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Ecommerce Backend Running');
});

app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});