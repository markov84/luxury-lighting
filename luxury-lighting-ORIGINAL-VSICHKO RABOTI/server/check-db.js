import mongoose from 'mongoose';
import Product from './models/Product.js';
import User from './models/User.js';

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

    // --- НАПРАВИ ПОТРЕБИТЕЛ АДМИНИСТРАТОР ---
    const usernameToMakeAdmin = 'admin'; // сложи твоето потребителско име ако е различно
    const updated = await User.updateOne(
      { username: usernameToMakeAdmin },
      { $set: { isAdmin: true } }
    );
    if (updated.modifiedCount > 0) {
      console.log(`User '${usernameToMakeAdmin}' is now admin.`);
    } else {
      console.log(`User '${usernameToMakeAdmin}' not found или вече е admin.`);
    }
    
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  } catch (error) {
    console.error('Database check error:', error);
  }
}

checkDatabase();
