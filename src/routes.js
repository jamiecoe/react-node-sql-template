const router = require('express').Router();
const { checkUser, addNewUser } = require('./queries');
const bcrypt = require('bcryptjs');

router.post('/signup', (req, res) => {
  const { name, username, password } = req.body;
  checkUser(username)
    .then((resdata) =>
      new Promise((resolve, reject) => {
        const alreadyExists = resdata[0].case;
        if(alreadyExists) reject(new Error('This user already exists, please login'));
        else {
          bcrypt.hash(password, 10, (err, hash) => {
            if(err) reject(err);
            else resolve(hash);
          })
        }
      })
    )
    .then((hashPassword) => addNewUser(name, username, hashPassword))
    .then((resdata) => {
      const { username } = resdata[0];
      req.session.user = username;
      res.send();
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post('/login', (req, res) => {
  console.log('Login form', req.body);
});

router.get('/authenticate', (req, res) => {
  console.log(req.session);
  if(req.session.user) {
    console.log('User has cookie!');
    res.status(200).send();

  } else {
    console.log('User needs to log-in');
    res.status(401).send();
  }

});

module.exports = router;
