import bcrypt from "bcrypt";
import User from "./../models/user.js"

// Sign Up Function
export const addUser = async (req, res, next) => {
    const { name, email, password, gender, dob } = req.body;

    let existingUserEmail;
    try {
        existingUserEmail = await User.findOne({ email: email });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
    }

    if (existingUserEmail) {
        console.log("A user with this email already exists");
        console.log(existingUserEmail);
        res.status(422).json({ error: "A user with this email already exists" });
        return;
    }

    let existingUserName;
    try {
        existingUserName = await User.findOne({ username: name });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
    }

    if (existingUserName) {
        console.log("A user with this username already exists");
        console.log(existingUserName);
        res.status(422).json({ error: "A user with this username already exists" });
    }

    async function hashPassword() {
        const saltRounds = 10;
        const hashedPassword = await new Promise((resolve, reject) => {
            bcrypt.hash(password, saltRounds, function (err, hash) {
                if (err) reject(err);
                resolve(hash);
            });
        });
        console.log("Hashing called");
        return hashedPassword;
    }

    const hashedPassword = await hashPassword();

    const newUser = new User({
        username: name,
        email: email,
        password: hashedPassword,
        gender: gender,
        dateofbirth: dob,
        notes: [],
        likedcommunities: [],
        isadmin: false
    });

    try {
        await newUser.save();
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
    }

    console.log("User added");
    console.log(newUser);
    res.status(201).json({ user: newUser });
};

// Login User Function
export const verifyUser = async (req, res, next) => {
    const { email, password } = req.body;

    let existingUser;

    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: "Loggin in failed, please try again later" });
    }

    if (!existingUser) {
        console.log("No user exists with this email, please sign up");
        res
            .status(401)
            .json({ error: "No user exists with this email, please sign up" });
        return;
    }

    async function checkHashPassword() {
        const isMatching = await new Promise((resolve, reject) => {
            bcrypt.compare(
                password,
                existingUser.password,
                function (error, isMatch) {
                    if (error) reject(error);
                    resolve(isMatch);
                }
            );
        });

        return isMatching;
    }

    const isPassMatching = await checkHashPassword();
    console.log(isPassMatching);

    if (!isPassMatching) {
        console.log("Invalid credentials, could not log you in.");
        res
            .status(401)
            .json({ error: "Invalid credentials, could not log you in" });
        return;
    }

    console.log("User found");
    console.log(existingUser);
    res.status(201).json({
        message: "Logged in!",
        user: existingUser,
    });
};
