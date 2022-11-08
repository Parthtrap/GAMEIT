//extracting mongoose module
const mongoose = require("mongoose");

//Schema for notes
const notesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        require: true,
        maxlength: [2000, "Word Limit (2000 Words) Exceeded"],
    },
});

//Schema for To-Do-Item
const toDoItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    checked: {
        type: Boolean,
        require: true
    },
});

//Schema for To-Do
const toDoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    items: [toDoItemSchema],
});

//Schema for users
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please enter username"],
        maxlength: 25,
    },
    email: {
        type: String,
        required: [true, "Please enter the email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please enter a password"],
        minlength: 8,
    },
    gender: {
        type: Boolean,
        require: [true, "Please enter Gender"],
    },
    dateofbirth: {
        type: Date,
        require: [true, "Please enter Date of Birth"],
    },
    notes: [notesSchema],
    likedcommunities: [
        {
            type: String,
        },
    ],
    isadmin: {
        type: Boolean,
        require: true,
    }
});

//exporting User modal
module.exports = mongoose.model("User", userSchema);