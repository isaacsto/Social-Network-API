const { connect, connection } = require('mongoose');


const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:3001/';


mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


connection.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

connection.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = connection;