const express = require('express');
import * as categoryService from '../service/category';

const router = express();
router.get('/', (req, res, next) => {
  categoryService
    .getAllCategory()
    .then(category => res.status(201).send({ category: category }))

    .catch(err => next(err));
});
router.post('/', (req, res, next) => {
  categoryService
    .addCategory(req.body)
    .then(data => {
      console.log(data);
      res.status(200).send({ data });
    })
    .catch(err => next(err));
});
export default router;
