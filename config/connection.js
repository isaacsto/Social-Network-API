const mongoose = require('mongoose');


const connectionString =
  process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/network_db';


mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

connection.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = connection; 