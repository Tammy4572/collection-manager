const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema){
     title: { type: String, required: true },
     overview: {type: String },
     rating: [{
          pg: { type: String },
          pg_13: { type: String },
          r: { type: String },
          un_rated: { type: String }
     }],
     length: [Number]
}

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Recipe;
