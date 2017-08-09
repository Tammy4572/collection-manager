const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

mongoose.connect('mongodb://localhost:27017/collection-manager');

var movie = new Movie({ title: "Titanic"});
movie.overview.push({rating: 'pg', language: 'eng'});
console.log(movie.toObject());
