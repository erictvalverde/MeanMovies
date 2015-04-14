var mongoose = require('mongoose');

//Comments Schema
var CommentSchema = new mongoose.Schema({
	user: {
		type: String
	},
	content: {
		type: String
	}
});

// Create the MovieSchema.
var MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  ratings: [],
  comments: [CommentSchema]
});

module.exports = MovieSchema;