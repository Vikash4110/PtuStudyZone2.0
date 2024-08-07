const User = require("../models/user-model");
const bcrypt = require('bcryptjs');

// Home Route
const home = async (req, res) => {
    res.status(200).send("Hello World");
};

// User Registration Logic
const register = async (req, res) => {
    try {
        const { username, rollno, department, semester, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const newUser = new User({
            username,
            rollno,
            department,
            semester,
            email,
            phone,
            password // Password will be hashed in the pre-save hook
        });

        await newUser.save(); // Save the user to the database

        res.status(201).json({
            msg: "Registration Successful",
            token: await newUser.generateToken(),
            userId: newUser._id.toString(),
        });
    } catch (err) {
        console.error("Registration error:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// User Login Logic
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        const isPasswordValid = await userExist.comparePassword(password); // Use comparePassword method
        if (isPasswordValid) {
            res.status(200).json({
                msg: "Login Successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            });
        } else {
            res.status(401).json({ message: "Invalid Email or Password" });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// User Logic
const user = async (req, res) => {
    try {
        const userData = req.user;
        return res.status(200).json({ userData });
    } catch (error) {
        console.error(`Error from user route ${error}`);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

module.exports = { home, register, login, user };
