var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    userName :       { type: String, require: true, max: 50 },
    date_of_birth :  { type: Date, require: true},
    date_joined :    { type: Date, require: true},
    article_id :     { type: mongoose.Schema.Types.ObjectId, ref: 'Article', require: true },
    comment_id :     { type:mongoose.Schema.Types.ObjectId, ref: 'commentPost'}
});

module.exports = mongoose.model('User', userSchema);