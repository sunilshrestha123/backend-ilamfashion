require('./knexConfig');

import express from 'express';
const morgan = require('morgan');

const app = express();

app.post('./category', async (req, res) => {
  res.send(200, 'category is running');
});

export default app;
