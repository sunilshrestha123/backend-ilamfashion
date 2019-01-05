const express = require('express');
import * as categoryService from '../service/category';

const router = express();
router.get('/', (req, res, next) => {
  categoryService
    .getAllCategory()
    .then(category => {
      console.log(category);
      res.status(201).send({ category: category });
    })
    .catch(err => next(err));
});
router.post('/', (req, res, next) => {
  console.log('category', req.body);
  categoryService

    .addCategory(req.body)
    .then(category => {
      console.log(category);
      res.status(200).send({ category });
    })
    .catch(err => next(err));
});
export default router;
