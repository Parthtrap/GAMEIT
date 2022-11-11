import mongoose from "mongoose";

//Schema for Communities
const communitySchema = new mongoose.Schema({
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
    imgsrc: {
        type: String,
        required: true
    }
});

//exporting Community modal
export default mongoose.model("Community", communitySchema);