import router from './route';

import express from 'express';
import contactusController from './../controller/contactusController';
const morgan = require('morgan');

const app = express();

app.use('/contactus', contactusController);

export default contactusrouter;
