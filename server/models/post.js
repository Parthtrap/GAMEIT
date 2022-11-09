//extracting mongoose module
import mongoose from "mongoose";

//Schema for comments
const commentSchema = new mongoose.Schema({
    raterID: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
    },
    review: {
        type: String,
        maxlength: 500,
    },
});

//Schema for posts
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        required: true
    },
    comments: [commentSchema],
    postingtime: {
        type: Date,
        required: true,
    },
    ownerId: {
        type: String,
        required: true
    },
});

//exporting Post modal
export default mongoose.model("Post", postSchema);