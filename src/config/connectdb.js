const mongoose = require('mongoose');

const authDb = {
  userName: 'ferhadkarimli077_db_user',
  password: 'eXX2lXzA2wu1WPgj',
};

const connectDb = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${authDb.userName}:${authDb.password}@auth.ic7wchp.mongodb.net/`);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDb;

// ferhadkarimli077_db_user,
// eXX2lXzA2wu1WPgj
// mongodb+srv://ferhadkarimli077_db_user:eXX2lXzA2wu1WPgj@auth.ic7wchp.mongodb.net/
