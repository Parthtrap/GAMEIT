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