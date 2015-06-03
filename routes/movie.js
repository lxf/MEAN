var express = require('express');
var router = express.Router();
var Movie = require('../models/movie.js');

/* 注意前面/upsnail 而不是/ */
router.get('/', function(req, res, next) {
  Movie.find(function (err, Movies) {
    if (err) return next(err);
    res.json(Movies);
  });
});

/* POST /Movies */
router.post('/', function(req, res, next) {
  Movie.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /Movies/id */
router.get('/:id', function(req, res, next) {
  Movie.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /Movies/:id */
router.put('/:id', function(req, res, next) {
  Movie.findByIdAndUpdate(req.params.id,{$set:{date:new Date()}},req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /Movies/:id */
router.delete('/:id', function(req, res, next) {
  Movie.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
