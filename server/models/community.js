//extracting mongoose module
const mongoose = require("mongoose");

//Schema for communities
const postSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tagline: {
        type: String,
        required: true
    },
    followers: {
        type: Number,
        required: true
    },
});

//exporting Post modal
module.exports = mongoose.model("Community", communitySchema);