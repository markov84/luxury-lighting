 import express from 'express';
import Order from '../models/Order.js';
import Product from '../models/Product.js';
import { auth } from '../utils/auth.js';
const router = express.Router();

router.post('/', auth, async (req, res) => {
  const { items } = req.body;
  const total = await Promise.all(
    items.map(async ({ product, quantity }) => {
      const prod = await Product.findById(product);
      return prod.price * quantity;
    })
  ).then(totals => totals.reduce((a, b) => a + b, 0));

  const order = new Order({
    user: req.user.id,
    items,
    total
  });
  await order.save();
  res.json({ msg: 'Order placed' });
});

router.get('/my', auth, async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).populate('items.product');
  res.json(orders);
});

export default router;
