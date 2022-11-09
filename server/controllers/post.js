import Post from "./../models/post.js"

export const addPost = async (req, res) => {
    //destructuring and storing requested data
    const {
        title,
        content,
        color,
        ownerId,
    } = req.body;

    //creating new post
    const newPost = new Post({
        title: title,
        description: content,
        likes: 0,
        comments: [],
        postingtime: Date.now(),
        ownerId: ownerId,
    });

    //add newPost to database
    try {
        await newPost.save();
        console.log("Market added");
        console.log(newPost);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};