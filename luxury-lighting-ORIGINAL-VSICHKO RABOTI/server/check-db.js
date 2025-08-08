import mongoose from 'mongoose';
import Product from './models/Product.js';

async function checkDatabase() {
  try {
    await mongoose.connect('mongodb://localhost:27017/luxury-lighting');
    console.log('Connected to MongoDB');
    
    const products = await Product.find({});
    console.log(`Total products: ${products.length}`);
    
    products.forEach(product => {
      console.log(`- ${product.name} (inStock: ${product.inStock}, category: ${product.category})`);
    });
    
    // Also check if any products match our query
    const inStockProducts = await Product.find({ inStock: true });
    console.log(`\nProducts with inStock=true: ${inStockProducts.length}`);
    
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Database check error:', error);
  }
}

checkDatabase();
