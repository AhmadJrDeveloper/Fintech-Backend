import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import { Sequelize } from 'sequelize';
dotenv.config();

const app = express();
app.use(bodyParser.json());

// // Sequelize initialization
// const sequelize = new Sequelize({
//   database: 'finance',
//   username: 'root',
//   password: '',
//   host: 'localhost',
//   dialect: 'mysql'
// });

// // Function to initialize Sequelize
// const initializeSequelize = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log('Connection to the database has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }
// };

// // IIFE (Immediately Invoked Function Expression) to use async/await
// (async () => {
//   await initializeSequelize();

  // Your other routes or middleware can be defined here

  // Start the server
  app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
  });