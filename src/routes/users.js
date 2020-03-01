import { Router } from 'express';
var router = Router();

/* GET users listing. */
// eslint-disable-next-line no-unused-vars
router.get('/', function(_req, res, _next) {
  res.send('respond with a resource');
});

export default router;
