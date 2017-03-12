var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    title: String,
    author: String,
    publishedDate: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('comment', commentSchema);