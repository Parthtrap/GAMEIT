import Post from "./../models/post.js"

export const addPost = async (req, res) => {
    //destructuring and storing requested data
    const {
        title,
        content,
        ownerId,
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