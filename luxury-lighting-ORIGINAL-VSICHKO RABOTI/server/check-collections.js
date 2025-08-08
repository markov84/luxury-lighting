import mongoose from 'mongoose';

async function checkCollections() {
  try {
    await mongoose.connect('mongodb://localhost:27017/luxury-lighting');
    
    const db = mongoose.connection.db;
    
    // Check products collection
    const productsCollection = db.collection('products');
    const productCount = await productsCollection.countDocuments();
    console.log(`Products collection count: ${productCount}`);
    
    const products = await productsCollection.find({}).toArray();
    console.log('Products:');
    products.forEach(product => {
      console.log(`- ${product.name} (inStock: ${product.inStock})`);
    });
    
    // Check categories collection
    const categoriesCollection = db.collection('categories');
    const categoryCount = await categoriesCollection.countDocuments();
    console.log(`\nCategories collection count: ${categoryCount}`);
    
    // Check users collection
    const usersCollection = db.collection('users');
    const userCount = await usersCollection.countDocuments();
    console.log(`Users collection count: ${userCount}`);
    
    await mongoose.disconnect();
  } catch (error) {
    console.error('Collection check error:', error);
  }
}

checkCollections();
