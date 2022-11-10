//extracting mongoose module
import mongoose from "mongoose";

//Schema for comments
const commentSchema = new mongoose.Schema({
    commenter: {
        type: String,
        required: true
    },
    comment: {
        type: Number,
        required: true,
    }
});

//Schema for posts
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
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
    community: {
        type: String,
        required: true
    },
    ownerId: {
        type: String,
        required: true
    },
    ownerUserName: {
        type: String,
        required: true
    }
});

//exporting Post modal
export default mongoose.model("Post", postSchema);