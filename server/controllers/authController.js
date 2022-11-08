// export const verifyUser = async (req, res, next) => {
//     const { email, password } = req.body;

//     console.log(req.body.email);
//     let existingUser = req.body.email;

//     if (!existingUser) {
//         console.log("No user exists with this email, please sign up");
//         res
//             .status(401)
//             .json({ error: "No user exists with this email, please sign up" });
//         return;
//     }c

//     const isPassMatching = true;
//     console.log(isPassMatching);

//     if (!isPassMatching) {
//         console.log("Invalid credentials, could not log you in.");
//         res
//             .status(401)
//             .json({ error: "Invalid credentials, could not log you in" });
//         return;
//     }

//     console.log("User found");
//     console.log(existingUser);
//     res.status(201).json({
//         message: "Logged in!",
//         user: existingUser,
//     });
// }


//extracting the user modal
import bcrypt from "bcrypt";
import User from "./../models/user.js"
// const bcrypt = require("bcryptjs");
// const User = require("../models/user");


//post signin request function
export const addUser = async (req, res, next) => {
    //destructuring and storing requested data
    const { name, email, password, gender, dob } = req.body;
    //finding existing user with same email;
    let existingUserEmail;
    try {
        existingUserEmail = await User.findOne({ email: email });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
    }


    //checking existing userEmail
    if (existingUserEmail) {
        console.log("A user with this email already exists");
        console.log(existingUserEmail);
        res.status(422).json({ error: "A user with this email already exists" });
        return;
    }



    //finding existing user with same username;
    let existingUserName;
    try {
        existingUserName = await User.findOne({ username: name });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
    }


    //checking existing username
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
    console.log("SignUp API Hit", existingUserEmail, existingUserName);

    //creating newUser object
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

    //add newUser to database
    try {
        await newUser.save();
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
    }

    console.log("User added");
    console.log(newUser);
    //resending data with 'OK' status code
    res.status(201).json({ user: newUser });
    // res.status(201).json({user : newUser.toObject({ getters: true})})     // toObject() is method in moongoose
};

//post login request function
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

// const toggleAddFavMarket = async (req, res) => {
//     const { userId, marketId } = req.body;

//     let user;

//     try {
//         user = await User.findOne({ _id: userId });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ error: err.message });
//     }

//     if (!user) {
//         const err = "No user with this id exist";
//         console.log(err);
//         res.status(401).json({ error: err });
//     }

//     const existingMarket = user.favourites.find((mid) => {
//         console.log(mid, marketId, mid === marketId);
//         return mid === marketId;
//     });
//     console.log("Existing market id : ", existingMarket);

//     if (existingMarket) {
//         console.log("Market already in favourites");

//         //removing market to user collections favuorites array
//         try {
//             const userFav = await User.updateOne(
//                 { _id: userId },
//                 {
//                     $pull: {
//                         favourites: marketId,
//                     },
//                 }
//             );
//             console.log("Market id removed from fav");
//             console.log(userFav);
//             try {
//                 user = await User.findOne({ _id: userId });
//             } catch (err) {
//                 console.log(err);
//                 res.status(500).json({ error: err.message });
//             }
//             res.status(201).json({ message: "Removed from fav", user: user });
//             return;
//         } catch (err) {
//             console.log(err.message);
//             res.status(500).json({ error: err.message });
//         }
//     } else {
//         //adding market to user collections favuorites array
//         try {
//             const userFav = await User.updateOne(
//                 { _id: userId },
//                 {
//                     $push: {
//                         favourites: marketId,
//                     },
//                 }
//             );
//             console.log("Market id added to fav");
//             console.log(userFav);
//             try {
//                 user = await User.findOne({ _id: userId });
//             } catch (err) {
//                 console.log(err);
//                 res.status(500).json({ error: err.message });
//             }
//             //resending data with 'OK' status code
//             res.status(201).json({ message: "Added to fav", user: user });
//         } catch (err) {
//             console.log(err.message);
//             res.status(500).json({ error: err.message });
//         }
//     }
// };

// exports.toggleAddFavMarket = toggleAddFavMarket;
// exports.signup = addUser;
// exports.login = verifyUser;