const express = require('express');
import * as mainslideService from '../service/mainslideService';
const router = express();

router.get('/', (req, res, next) => {
  mainslideService
    .getAllMainSlide()
    .then((mainslide) => {
      res.status(201).send({ data: mainslide });
    })
    .catch((err) => next(err));
});

export default router;
