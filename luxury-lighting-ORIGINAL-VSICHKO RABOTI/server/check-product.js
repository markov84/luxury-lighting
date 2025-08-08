import mongoose from 'mongoose';
import Product from './models/Product.js';

async function checkProduct() {
  try {
    await mongoose.connect('mongodb://localhost:27017/luxury-lighting');
    
    const product = await Product.findOne().lean();
    console.log('Raw product from DB:', JSON.stringify(product, null, 2));
    
    const productWithVirtuals = await Product.findOne();
    console.log('Product with virtuals:', JSON.stringify(productWithVirtuals.toJSON(), null, 2));
    
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error:', error);
  }
}

checkProduct();
