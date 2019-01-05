require('knex');
// const express = require('express')\
import router from './route';
import express from 'express';
import { hashing } from './utils/crypt';
import userController from './controller/userController';
import categoryController from './controller/categoryController';
import subcategoryController from './controller/subcategoryController';
const morgan = require('morgan');
const app = express();

app.get('/', async (req, res) =>
  // const password = await hashing('tet');
  // console.log(password);
  res.send(200, 'api is running well')
);
app.use('/register', userController);
app.use('/category', categoryController);
app.use('/subcategory', subcategoryController);
//   res.send({
//     user: {
//       firstname: "sunil",
//       password: "sunil123",
//       name: "sss",
//       nameuser: "hello "
//     }
//   })
// );
export default app;
