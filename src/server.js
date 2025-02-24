// server.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/api/orders', (req, res) => {
  const orderData = req.body;
  console.log('Order Data:', orderData);
  res.status(200).send({ message: 'Order placed successfully' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
