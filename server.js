import  express from "express";
import dotenv from 'dotenv'
import { Sequelize } from "sequelize";

dotenv.config()
const app = express();

app.listen (process.env.PORT ,()=>{
    console.log(`server listening on port  ${ process.env.PORT}`);
})
const sequelize = new Sequelize('finance', 'root', '', {
    host: 'localhost',
    dialect:  'mysql'
  });

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  