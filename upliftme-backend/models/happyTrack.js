const mongoose = require("mongoose");
const Schema = mongoose.Schema;


//create <mood>Track Schema & model
const HappyTrackSchema = new Schema({
	track_id: {
		type: String,
		required: [true, 'track_id field is required']
	},
	preview_url: {
		type: String,
		required: [true, 'preview_url field is required']

	},
	image_url: {
		type: String,
		required: [true, 'image_url field is required']

	},
	artist: {
		type: String,
		required: [true, 'artist field is required']
	},
	available: {
		type: Boolean,
		default: true
	}
});

const HappyTrack = mongoose.model('happyTrack', HappyTrackSchema);

module.exports = HappyTrack;