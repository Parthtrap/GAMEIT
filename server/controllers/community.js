
import Community from "./../models/community.js"

// Adding a New Community
export const addCommunity = async (req, res) => {
    const { name, tagline, imgsrc } = req.body;

    let existingCommunity
    try {
        existingCommunity = await Community.findOne({ name: name });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: "Community Making Failed... Please Try Again" });
        return;
    }

    if (existingCommunity) {
        console.log("Community Already Exists");
        res
            .status(409)
            .json({ error: "Community with this name already exists" });
        return;
    }

    const newCommunity = new Community({
        name: name,
        tagline: tagline,
        followers: 0,
        imgsrc: imgsrc,
    });

    try {
        await newCommunity.save();
        console.log("Community added");
        console.log(newCommunity);
        res.status(201).json({ message: "Added Community Successfully" })
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: err.message });
    }
};


// Getting all Communities
export const getCommunities = async (req, res) => {

    let communities;
    try {
        communities = await Community.find();
        console.log(communities);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
        return;
    }

    console.log("Allcommunities found");
    console.log(communities);
    res.status(201).json({ communities });
};

// Getting Community Details by it's Name
export const getCommunity = async (req, res) => {
    const { name } = req.body;
    let community;
    try {
        community = await Community.findOne({ name: name });
        console.log(community);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
        return;
    }

    if (!community) {
        res.status(404).json({ message: "No Community Found" })
        return;
    }

    console.log("Community found");
    console.log(community);
    res.status(201).json({ community });
};
