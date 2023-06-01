const mongoose = require('mongoose');
const User = require('./models/user');

mongoose.connect('network_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  

  const usersData = [
    { firstName: 'John', lastName: 'Doe', email: 'john@example.com', password: 'password123' },
    { firstName: 'Jane', lastName: 'Smith', email: 'jane@example.com', password: 'password456' },
  ];
  
/*   const seedDatabase = async () => {
    try {
     
      await User.deleteMany();
      await User.insertMany(usersData);
      console.log('Database seeded successfully');
      process.exit(0);
    } catch (error) {
      console.error('Error seeding database:', error);
      process.exit(1);
    }
  }; */

  seedDatabase();
  
  