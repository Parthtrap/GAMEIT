import Community from "./../models/community.js"
import User from "./../models/user.js"

// Get User Details
export const getUser = async (req, res, next) => {
    const { email } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        console.log("Get User Details -> " + err.message);
        res.status(500).json({ message: err.message });
        return;
    }
    if (!existingUser) {
        console.log("Get User Details -> No Such user Exists !!");
        res.status(404).json({ message: "No Such user Exists !!" });
        return;
    }
    else {
        console.log("Get User Details -> User Found !!");
        res.status(201).json(existingUser);
    }

}

// Follow a Community
export const followCommunity = async (req, res) => {
    const { email, community } = req.body;
    let user;
    try {
        user = await User.updateOne({ email: email }, {
            $push: {
                likedcommunities: community,
            },
        });
    } catch (err) {
        console.log("Follow Community -> Update User -> " + err.message);
        res.status(500).json({ message: err.message });
        return;
    }
    let communityToChange;
    try {
        communityToChange = await Community.updateOne({ name: community }, {
            $inc: {
                followers: 1,
            },
        });
    } catch (err) {
        console.log("Follow Community -> Update Community -> " + err.message);
        res.status(500).json({ message: err.message });
        return;
    }
    if (!user || !communityToChange) {
        console.log("Follow Community -> No Such user or community Exists !!")
        res.status(404).json({ message: "No Such user or community Exists !!" });
        return;
    } else {
        console.log("Follow Community -> Followed Succcessfully");
        res.status(201).json({ user, communityToChange });
    }
}

// Unfollow a Community
export const unfollowCommunity = async (req, res) => {
    const { email, community } = req.body;
    let user;
    let communityToChange;
    try {
        communityToChange = await Community.updateOne({ name: community }, {
            $inc: {
                followers: -1,
            },
        });
    } catch (err) {
        console.log("Unfollow Community -> Community user -> " + err.message);
        res.status(500).json({ message: err.message });
        return;
    }
    try {
        user = await User.updateOne({ email: email }, {
            $pull: {
                likedcommunities: community,
            },
        });
    } catch (err) {
        console.log("Unfollow Community -> User Update -> " + err.message);
        res.status(500).json({ message: err.message });
        return;
    }
    if (!user || !communityToChange) {
        console.log("Unfollow Community -> No Such user or community Exists !!")
        res.status(404).json({ message: "No Such user or community Exists !!" });
    } else {
        console.log("Unfollow Community -> Unfollowed Succcessfully");
        res.status(201).json({ user, communityToChange });
    }
}

// Update UserName of User
export const updateUserName = async (req, res) => {
    const { email, username } = req.body;
    let user;
    try {
        console.log({ username });
        user = await User.updateOne({ email: email }, { username: username });
    } catch (err) {
        console.log("Update UserName -> " + err.message);
        res.status(500).json({ message: err.message });
        return;
    }
    console.log("Update UserName -> User Data Updated Sucessfully!!");
    res.status(201).json({ message: "User Data Updated Sucessfully!!" })
}