import mongoose from 'mongoose';
import Product from './models/Product.js';

async function testProduct() {
  try {
    await mongoose.connect('mongodb://localhost:27017/luxury-lighting');
    
    console.log('Creating test product...');
    const testProduct = new Product({
      name: 'Test Product',
      description: 'Test description',
      price: 100,
      category: '68947a5c19cd2af93d47fdc5',
      inStock: true,
      stockQuantity: 10
    });
    
    await testProduct.save();
    console.log('Saved product:', JSON.stringify(testProduct.toJSON(), null, 2));
    
    // Update existing product to trigger pre-save
    const existingProduct = await Product.findOne();
    existingProduct.price = existingProduct.price; // This should trigger the pre-save hook
    await existingProduct.save();
    console.log('Updated existing product:', JSON.stringify(existingProduct.toJSON(), null, 2));
    
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error:', error);
  }
}

testProduct();
