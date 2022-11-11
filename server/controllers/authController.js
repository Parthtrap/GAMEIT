import bcrypt from "bcrypt";
import User from "./../models/user.js"

// Sign Up Function
export const addUser = async (req, res) => {
    const { name, email, password, gender, dob } = req.body;

    let existingUserEmail;
    try {
        existingUserEmail = await User.findOne({ email: email });
    } catch (err) {
        console.log("Sign Up -> Finding Existing User -> " + err.message);
        res.status(500).json({ message: err.message });
        return;
    }

    // Checking for Existing User with this email
    if (existingUserEmail) {
        console.log("Sign Up -> A user with this email already exists!!");
        res.status(409).json({ message: "A user with this email already exists!!" });
        return;
    }

    // Hashing the Password
    async function hashPassword() {
        const saltRounds = 10;
        const hashedPassword = await new Promise((resolve, reject) => {
            bcrypt.hash(password, saltRounds, function (err, hash) {
                if (err) reject(err);
                resolve(hash);
            });
        });
        return hashedPassword;
    }
    const hashedPassword = await hashPassword();

    // Making a New User to Upload
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

    // Uploading the User
    try {
        await newUser.save();
    } catch (err) {
        console.log("Sign Up -> Uploading User -> " + err.message);
        res.status(500).json({ message: err.message });
        return;
    }

    console.log("Sign Up -> User added");
    res.status(201).json({ message: "Sign Up Sucess!!" });
};

// Login User Function
export const verifyUser = async (req, res, next) => {
    const { email, password } = req.body;

    // Finding User From Database
    let existingUser;
    try {
        existingUser = await User.findOne({ email: email });
    } catch (err) {
        console.log("Log In -> " + err.message);
        res.status(500).json({ message: err.message });
        return;
    }

    // Check if User Actually Exists or not
    if (!existingUser) {
        console.log("Log in -> No user exists with this email, please sign up !!");
        res
            .status(404)
            .json({ message: "No user exists with this email, please sign up !!" });
        return;
    }

    // Hashing and Checking Password
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

    // If Password Doesn't Match
    if (!isPassMatching) {
        console.log("Log in -> Invalid credentials");
        res
            .status(401)
            .json({ message: "Invalid credentials !!" });
        return;
    }

    res.status(201).json({
        message: "Logged in!",
        user: existingUser,
    });
};
