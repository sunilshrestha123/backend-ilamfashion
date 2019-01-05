const express = require('express');
import * as subcategorService from '../service/subcategoryService';
const router = express();
router.post('/', (req, res, next) => {
  console.log('data', req.body);
  subcategorService
    .addsubCategory(req.body)
    .then(subcategory => {
      console.log(subcategory);
      res.status(200).send({ subcategory });
    })
    .catch(err => next(err));
});
router.get('/', (req, res, next) => {
  subcategorService
    .getAllSubcategory()
    .then(subcategory => {
      console.log(subcategory);
      res.status(201).send({ subcategory: subcategory });
    })
    .catch(err => next(err));
});
export default router;
