const express = require('express');
import * as userService from '../service/userService';

const router = express();

router.get('/', (req, res, next) => {
  userService
    .getAllUser()
    .then(data => {
      console.log(data);
      res.status(201).send({ data: data });
    })
    .catch(err => next(err));
});
router.get('/:id', (req, res, next) => {
  userService
    .getUserById(req.params.id)
    .then(data => {
      console.log(data);
      res.status(201).send({ data: data });
    })
    .catch(err => next(err));
});
// router.post('/', (req, res, next) => {
//   console.log('body', req.body);
//   userService
//     .getUserUpdate(req.body)
//     .then(data => {
//       console.log(data);
//       res.status(200).send({ data });
//     })
//     .catch(err => next(err));
// });

//post
router.post('/', (req, res, next) => {
  console.log('body', req.body);
  userService
    .getUserAdd(req.body)
    .then(data => {
      console.log(data);
      res.status(200).send({ data });
    })
    .catch(err => next(err));
});

export default router;
