import User from "../models/user.js";
import Post from "./../models/post.js"

// Making a New Post
export const addPost = async (req, res) => {
    const { title, content, ownerId, ownerUserName, community } = req.body;

    const newPost = new Post({
        title: title,
        content: content,
        likes: 0,
        comments: [],
        postingtime: Date.now(),
        ownerId: ownerId,
        ownerUserName: ownerUserName,
        community: community
    });

    try {
        await newPost.save();
        console.log("Add Post -> Post added Successfully !!");
        res.status(201).json({ message: "Post Added Successfully !!" })
    } catch (err) {
        console.log("Add Post -> " + err);
        res.status(500).json({ message: err.message });
    }
};

// Fetching all Posts from User
export const getUserPosts = async (req, res) => {
    const ownerId = req.body.email;

    let userPosts;
    try {
        userPosts = await Post.find({ ownerId: ownerId });
    } catch (err) {
        console.log("Get User Post -> " + err.message);
        res.status(500).json({ message: err.message });
        return;
    }

    console.log("Get User Post -> All Posts of the user Found !!");
    res.status(201).json({ UserPosts: userPosts });
};

//Get a Post Detail by its ID
export const getPostByID = async (req, res) => {
    const id = req.body.id;

    let postDetails;
    try {
        postDetails = await Post.findOne({ _id: id });
    } catch (err) {
        console.log("Get Post By ID -> " + err.message);
        res.status(500).json({ message: err.message });
        return;
    }

    console.log("Get Post By ID -> All Posts of the user Found !!");
    res.status(201).json(postDetails);
};

// Get All posts
export const getAllPosts = async (req, res) => {

    let PostList;
    try {
        PostList = await Post.find().sort({ postingtime: -1 });
    } catch (err) {
        console.log("Get All Posts -> " + err.message);
        res.status(500).json({ message: err.message });
        return;
    }

    console.log("Get All Posts -> All Posts found !!");
    res.status(201).json(PostList);
};

// Get all Posts of a specific Community
export const getPostByCommunity = async (req, res) => {

    const { community } = req.body;
    let PostList;
    try {
        PostList = await Post.find({ community: community });
    } catch (err) {
        console.log("Get Community Posts -> " + err.message);
        res.status(500).json({ message: err.message });
        return;
    }
    console.log("Get Community Posts -> Community Posts Found Successfully !!");
    res.status(201).json(PostList);
};


// Comment on a Post
export const comment = async (req, res) => {
    const { commenter, comment, postid } = req.body;
    try {
        const temp = await Post.findOne({ _id: postid })
        temp.comments.push({ "commenter": commenter, "comment": comment });
        temp.save();
        res.status(201).json({ message: "Comment Made Successfully" })
    }
    catch (err) {
        console.log("Make Comment -> " + err.message);
        res.status(500).json({ message: err.message });
        return;
    }
}


// Like a Post
export const likePost = async (req, res) => {
    const { email, postid } = req.body;
    try {
        const user = await User.updateOne({ email: email }, {
            $push: {
                likedposts: postid
            },
        });
    }
    catch (err) {
        console.log("Like Post -> Fetch User -> " + err.message);
        res.status(500).json({ message: err.message });
        return;
    }
    try {
        const post = await Post.updateOne({ _id: postid }, {
            $inc: {
                likes: 1
            },
        });
    }
    catch (err) {
        console.log("Like Post -> Fetch Post -> " + err.message);
        res.status(500).json({ message: err.message });
        return;
    }
    res.status(201).json({ message: "Liked Post !!" })
}

// Unlike a Post
export const unlikePost = async (req, res) => {
    const { email, postid } = req.body;
    try {
        const user = await User.updateOne({ email: email }, {
            $pull: {
                likedposts: postid
            },
        });
    }
    catch (err) {
        console.log("Unlike Post -> Fetch User -> " + err.message);
        res.status(500).json({ message: err.message });
        return;
    }
    try {
        const post = await Post.updateOne({ _id: postid }, {
            $inc: {
                likes: -1
            },
        });
    }
    catch (err) {
        console.log("Unlike Post -> Fetch Post -> " + err.message);
        res.status(500).json({ message: err.message });
        return;
    }
    res.status(201).json({ message: "Unliked Post!!" })
}