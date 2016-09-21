var mongoose = require('mongoose');

var workSchema = new mongoose.Schema({
	title: String,
	summary1: String,
	summary2: String,
	summary3: String,
	image: String,
	linkToSite: String,
	linkToCode: String,
	author: {
		id: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'user'
		},
		username: String
	}
});

module.exports = mongoose.model('work', workSchema);