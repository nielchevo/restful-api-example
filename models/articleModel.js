var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
    title   : {type: String, require:true, max: 255}, 
    body    : {type: String},
    date_created : {type: Date},
    author : {type: mongoose.Schema.Types.ObjectId, ref: 'author'}

});

module.exports = mongoose.model('Article', articleSchema);