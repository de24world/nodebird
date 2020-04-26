const express = require('express');
const router = express.Router();

// Profile Page
router.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile', { title: '내 정보 - NodeBird', user: req.user });
  });
  // Join Page
  router.get('/join', isNotLoggedIn, (req, res) => {
    res.render('join', {
      title: '회원가입 - NodeBird',
      user: req.user,
      joinError: req.flash('joinError'),
    });
  });
  // Main Page
  router.get('/', (req, res, next) => {
    Post.findAll({
      include: [{
        model: User,
        attributes: ['id', 'nick'],
      }, {
        model: User,
        attributes: ['id', 'nick'],
        as: 'Liker',
      }],
    })
      .then((posts) => {
        console.log(posts);
        res.render('main', {
          title: 'NodeBird',
          twits: posts,
          user: req.user,
          loginError: req.flash('loginError'),
        });
      })
      .catch((error) => {
        console.error(error);
        next(error);
      });
  });
  
  module.exports = router;