import post from "./../models/post.js";
import Post from "./../models/post.js"

export const addPost = async (req, res) => {
    //destructuring and storing requested data
    const {
        title,
        content,
        ownerId,
        ownerUserName,
        community
    } = req.body;

    //creating new post
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

    //add newPost to database
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

//funstion to find all Posts of a user
export const getUserPosts = async (req, res) => {
    const ownerId = req.body.email;
    console.log(req);

    let userPosts;
    try {
        userPosts = await post.find({ ownerId: ownerId });
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