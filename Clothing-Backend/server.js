const express = require('express');
const app = express();

app.use(express.json());

// Routes
const productRoutes = require('./routes/products');
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to Clothing Shop API');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
