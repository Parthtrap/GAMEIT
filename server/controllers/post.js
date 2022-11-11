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
        console.log("Post added");
        console.log(newPost);
        res.status(201).json({ message: "Post Added Successfully" })
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};

// Fetching all Posts from User
export const getUserPosts = async (req, res) => {
    const ownerId = req.body.email;
    console.log(req);

    let userPosts;
    try {
        userPosts = await Post.find({ ownerId: ownerId });
        console.log(userPosts);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
        return;
    }

    console.log("All Posts of the user found");
    console.log(userPosts);
    res.status(201).json({ UserPosts: userPosts });
};

//Get a Post Detail by its ID
export const getPostByID = async (req, res) => {
    const id = req.body.id;

    let postDetails;
    try {
        postDetails = await Post.findOne({ _id: id });
        console.log(postDetails);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
        return;
    }

    console.log("All Posts of the user found");
    console.log(postDetails);
    res.status(201).json(postDetails);
};

// Get All posts
export const getAllPosts = async (req, res) => {

    let PostList;
    try {
        PostList = await Post.find().sort({ postingtime: -1 });
        console.log(PostList);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
        return;
    }

    console.log("All Posts found");
    console.log(PostList);
    res.status(201).json(PostList);
};

// Get all Posts of a specific Community
export const getPostByCommunity = async (req, res) => {

    const { community } = req.body;
    let PostList;
    try {
        PostList = await Post.find({ community: community });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
        return;
    }
    console.log("Post of community " + community);
    console.log(PostList);
    res.status(201).json(PostList);
};


// Comment on a Post
export const comment = async (req, res) => {
    const { commenter, comment, postid } = req.body;
    try {
        const temp = await Post.findOne({ _id: postid })
        temp.comments.push({ "commenter": commenter, "comment": comment });
        temp.save();
        res.status(201).json({ message: "done " })
    }
    catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
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
        console.log(err.message);
        res.status(500).json({ error: err.message });
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
        console.log(err.message);
        res.status(500).json({ error: err.message });
        return;
    }
    res.status(201).json({ message: "Liked Post!!" })
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
        console.log(err.message);
        res.status(500).json({ error: err.message });
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
        console.log(err.message);
        res.status(500).json({ error: err.message });
        return;
    }
    res.status(201).json({ message: "Liked Post!!" })
}