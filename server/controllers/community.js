
import Community from "./../models/community.js"

// Adding a New Community
export const addCommunity = async (req, res) => {
    const { name, tagline, imgsrc } = req.body;

    let existingCommunity
    try {
        existingCommunity = await Community.findOne({ name: name });
    } catch (err) {
        console.log("Add Community -> Checking Existing Community -> " + err.message);
        res.status(500).json({ message: err.message });
        return;
    }

    if (existingCommunity) {
        console.log("Add Community -> Community Already Exists");
        res
            .status(409)
            .json({ message: "Community with this name already exists !!" });
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
        console.log("Add Community -> Community added Sucessfully");
        res.status(201).json({ message: "Added Community Successfully !!" })
        return;
    } catch (err) {
        console.log("Add Community -> Uploading the New Community -> " + err);
        res.status(500).json({ message: err.message });
        return;
    }
};


// Getting all Communities
export const getCommunities = async (req, res) => {

    let communities;
    try {
        communities = await Community.find();
    } catch (err) {
        console.log("Get Communities -> " + err.message);
        res.status(500).json({ message: err.message });
        return;
    }

    console.log("Get Communities -> Found Communities Sucessfully !!");
    res.status(201).json({ communities });
};

// Getting Community Details by it's Name
export const getCommunity = async (req, res) => {
    const { name } = req.body;
    let community;
    try {
        community = await Community.findOne({ name: name });
    } catch (err) {
        console.log("Get Community -> " + err.message);
        res.status(500).json({ message: err.message });
        return;
    }

    if (!community) {
        console.log("Get Community -> Community Not found");
        res.status(404).json({ message: "No Community Found" })
        return;
    }

    console.log("Get Community -> Community found Successfully !!");
    res.status(201).json({ community });
};
