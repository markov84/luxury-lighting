import mongoose from 'mongoose';

async function checkMongoDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/');
    
    const admin = mongoose.connection.db.admin();
    const databases = await admin.listDatabases();
    
    console.log('Available databases:');
    databases.databases.forEach(db => {
      console.log(`- ${db.name}`);
    });
    
    // Now connect to our specific database
    await mongoose.disconnect();
    await mongoose.connect('mongodb://localhost:27017/luxury-lighting');
    
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('\nCollections in luxury-lighting database:');
    collections.forEach(col => {
      console.log(`- ${col.name}`);
    });
    
    await mongoose.disconnect();
  } catch (error) {
    console.error('MongoDB check error:', error);
  }
}

checkMongoDB();
