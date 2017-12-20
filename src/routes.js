const router = require('express').Router();

router.post('/signup', (req, res) => {
  console.log('Signup form', req.body);
})

router.post('/login', (req, res) => {
  console.log('Login form', req.body);
})

module.exports = router;
