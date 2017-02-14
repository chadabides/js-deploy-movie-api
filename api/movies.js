var express = require("express");
var cors = require('cors');
var mongodb = require("mongodb");
var db_1 = require("../data/db");
var router = express.Router();
// ADD OR EDIT MOVIE
router.post('/', function (req, res) {
    var movie = req.body;
    movie._id = new mongodb.ObjectID(req.body._id);
    db_1.default.db.collection('movies').save(req.body).then(function (newMovie) {
        res.json(newMovie);
    });
});
// GET MOVIES
router.get('/', function (req, res) {
    db_1.default.db.collection('movies').find().toArray().then(function (movies) {
        res.json(movies);
    });
});
router.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  ]);
});
// DELETE MOVIE
router.delete('/:id', function (req, res) {
    var movieId = new mongodb.ObjectID(req.params['id']);
    db_1.default.db.collection('movies').remove({ _id: movieId }).then(function () {
        res.sendStatus(200);
    });
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router;
