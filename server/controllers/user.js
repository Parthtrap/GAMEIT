import Community from "./../models/community.js"
import User from "./../models/user.js"

export const getUser = async (req, res, next) => {
    const { email } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
        return;
    }
    if (!existingUser) {
        console.log("No Such user Exists");
        res.status(404).json({ error: "No Such user Exists" });
    }
    else {
        console.log(existingUser);
        res.status(201).json(existingUser);
    }

}

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
        console.log(err.message);
        res.status(500).json({ error: err.message });
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
        console.log(err.message);
        res.status(500).json({ error: err.message });
        return;
    }
    if (!user || !communityToChange) {
        console.log("Some error occurred while looking for user or community.")
        res.status(404).json({ error: "No Such user or community Exists" });
    } else {
        console.log(user);
        console.log(communityToChange);
        res.status(201).json({ user, communityToChange });
    }
}

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
        console.log(err.message);
        res.status(500).json({ error: err.message });
        return;
    }
    try {
        user = await User.updateOne({ email: email }, {
            $pull: {
                likedcommunities: community,
            },
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
        return;
    }
    if (!user || !communityToChange) {
        console.log("Some error occurred while looking for user or community.")
        res.status(404).json({ error: "No Such user or community Exists" });
    } else {
        console.log(user);
        console.log(communityToChange);
        res.status(201).json({ user, communityToChange });
    }
}

export const updateUserName = async (req, res) => {
    const { email, username } = req.body;
    let user;
    try {
        user = await User.updateOne({ email: email }, { username: username });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
        return;
    }
    console.log("User Data Updated Sucessfully!!");
    res.status(201).json({ message: "User Data Updated Sucessfully!!" })
}