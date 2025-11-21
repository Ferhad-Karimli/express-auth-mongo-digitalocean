// import connectDb from "./config/connectdb";
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const connectDb = require('./src/config/connectdb');

app.use(express.json());


const authRoutes = require('./src/routes/signUp');
app.use('/', authRoutes);


const loginRoutes =  require('./src/routes/login');
app.use('/', loginRoutes);




connectDb().then(() => {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
});
