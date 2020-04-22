const express = require('express');
import * as contactusService from '../service/contactusService';
import Contactus from '../model/contactus';
const router = express();

router.get('/', (req, res, next) => {
  contactusService
    .getAllContactus()
    .then((data) => {
      console.log(data);
      res.status(201).send({ data: data });
    })
    .catch((err) => next(err));
});

router.post('/', (req, res, next) => {
  console.log('body value', req.body);
  contactusService
    .addContactus(req.body)
    .then((data) => {
      console.log(data);
      res.status(200).send({ data });
    })
    .catch((err) => next(err));
});
router.get('/:id', (req, res, next) => {
  contactusService
    .getContactusById(req.params.id)
    .then((data) => {
      console.log(data);
      res.status(200).send({ data });
    })
    .catch((err) => next(err));
});

router.patch('/:id', (req, res, next) => {
  if (req.params.id * 1 > contactus.length) {
    return res.status(404);
    // console.log('data is pudated');
  }
});
export default router;
