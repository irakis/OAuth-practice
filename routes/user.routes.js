const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
  if (req.user) {
    res.render('logged', { userName: req.user.name.givenName, image: req.user._json.picture });
  } else res.redirect('/user/no-permission')
});

router.get('/profile', (req, res) => {
  if (req.user) {
    res.render('user_profile');
  } else res.redirect('/user/no-permission');
});

router.get('/profile/settings', (req, res) => {
  if (req.user) {
    res.render('profile_settings');
  } else res.redirect('/user/no-permission');
})

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/logout', (req, res, next) => {
  req.logout((err) => {
    if (err) { return next(err) } 
  });
   res.redirect('/');
})

module.exports = router;