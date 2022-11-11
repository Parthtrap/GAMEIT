//extracting mongoose module
import mongoose from "mongoose";

//Schema for Post
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
    comments: [{
        commenter: {
            type: String,
            required: true
        },
        comment: {
            type: String,
            required: true,
        }
    }],
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