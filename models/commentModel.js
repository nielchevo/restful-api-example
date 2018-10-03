var mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
    article_id  : {type: mongoose.Schema.Types.ObjectId },
    author_id   : {type: mongoose.Schema.Types.ObjectId },
    body        : {type: String , require: true},
    posted_date : {type: Date}
});

module.exports = mongoose.model('Comment', commentSchema);