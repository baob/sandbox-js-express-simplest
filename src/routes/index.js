// @flow

import { Router } from 'express';
var router = Router();

/* GET home page. */
// eslint-disable-next-line no-unused-vars
router.get('/', function(_req, res, _next) {
  res.render('index', { title: 'Express' });
});

export default router;

const fred = (x: string) => {
  return ' a string' + x;
};

fred(3);
