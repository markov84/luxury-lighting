import mongoose from 'mongoose';
import Product from './models/Product.js';

async function updateAllProducts() {
  try {
    await mongoose.connect('mongodb://localhost:27017/luxury-lighting');
    
    console.log('Updating all products with EUR prices...');
    const products = await Product.find();
    
    for (let product of products) {
      if (!product.priceEUR) {
        product.markModified('price'); // Force the pre-save hook to run
        await product.save();
        console.log(`Updated ${product.name}: ${product.price} лв. = €${product.priceEUR}`);
      }
    }
    
    console.log('All products updated successfully!');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error:', error);
  }
}

updateAllProducts();
