import './knexConfig';
import cors from 'cors';
import parse from 'body-parser';
import express from 'express';
const morgan = require('morgan');
import router from './route';
import logger from './logger';
import { hashing } from './utils/crypt';

const app = express();
const port = 3001;
app.use(morgan('combined'));

app.use(cors());
app.use(parse.json());

app.use('/api', router);

// app.get('/test', async (req, res) => {
//   console.log('tete');
//   console.log(await hashing('teting'));
//   res.status(200).send({ data: hashing('sunil') });
// });
app.listen(port, () => logger.info('message'));
