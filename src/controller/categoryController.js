const express = require('express');
import * as categoryService from '../service/category';

const router = express();
router.get('/', (req, res, next) => {
  categoryService
    .getAllCategory()
    .then((category) => {
      console.log(category);
      res.status(201).send({ category: category });
    })
    .catch((err) => next(err));
});
router.post('/', (req, res, next) => {
  console.log('contact us', req.body);
  contactusService
    .addContactus(res.body)
    .then((data) => {
      console.log(category);
      res.status(200).send({ category });
    })
    .catch((err) => next(err));
});

router.patch('/:id');
// console.log('body', req.body);
//   userService
//     .getUserAdd(req.body)
//     .then(data => {
//       console.log(data);
//       res.status(200).send({ data });
//     })
//     .catch(err => next(err));
// });

export default router;
