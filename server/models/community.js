//extracting mongoose module
import mongoose from "mongoose";

//Schema for communities
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

//exporting Post modal
export default mongoose.model("Community", communitySchema);