const User = require("../models/user-model");
const { generateOTP, sendOTPEmail } = require("../utils/otp-utils");

// Home Route
const home = async (req, res) => {
    res.status(200).send("Hello World");
};
//User Registration Logic
const register = async (req, res) => {
    try {
        const { username, rollno, department, semester, email, phone, password } = req.body;

        const userExist = await User.findOne({ email });
        const rollnoExist = await User.findOne({ rollno });

        if (userExist) {
            return res.status(400).json({ message: "Email already exists" });
        }
        if (rollnoExist) {
            return res.status(400).json({ message: "RollNo already exists" });
        }

        const otp = generateOTP();
        const otpExpires = Date.now() + 10 * 60 * 1000; // OTP valid for 10 minutes

        const newUser = new User({
            username,
            rollno,
            department,
            semester,
            email,
            phone,
            password,
            otp,
            otpExpires,
            isVerified: false // Ensure user is not verified yet
        });

        await newUser.save();
        await sendOTPEmail(email, otp);

        res.status(201).json({
            msg: "Registration Successful. Please verify your OTP.",
            userId: newUser._id.toString()
        });
    } catch (err) {
        console.error("Registration error:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// auth-controller.js


//verify-otp
const verifyOTP = async (req, res) => {
    try {
        const { userId, otp } = req.body;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        if (user.otp !== otp) {
            return res.status(400).json({ message: "Invalid OTP" });
        }

        if (Date.now() > user.otpExpires) {
            return res.status(400).json({ message: "OTP has expired" });
        }

        user.otp = undefined; // Clear OTP
        user.otpExpires = undefined; // Clear OTP expiry time
        user.isVerified = true; // Mark user as verified
        await user.save();

        res.status(200).json({ message: "OTP verified successfully" });
    } catch (err) {
        console.error("OTP Verification error:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// User Login Logic
// const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const userExist = await User.findOne({ email });

//         if (!userExist) {
//             return res.status(400).json({ message: "Invalid Credentials" });
//         }

//         const isPasswordValid = await userExist.comparePassword(password); // Use comparePassword method
//         if (isPasswordValid) {
//             res.status(200).json({
//                 msg: "Login Successful",
//                 token: await userExist.generateToken(),
//                 userId: userExist._id.toString(),
//             });
//         } else {
//             res.status(401).json({ message: "Invalid Email or Password" });
//         }
//     } catch (err) {
//         console.error(err);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });

        if (!userExist) {
            return res.status(400).json({ message: "Invalid Credentials" });
        }

        if (!userExist.isVerified) {
            return res.status(400).json({ message: "User not verified. Please verify your email." });
        }

        const isPasswordValid = await userExist.comparePassword(password);
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


const updateUser = async (req, res) => {
    try {
      const { username, rollno, department, semester, email, phone } = req.body;
      const userId = req.user._id;
  
      const updatedUser = await User.findByIdAndUpdate(userId, { username, rollno, department, semester, email, phone }, { new: true, runValidators: true });
      res.status(200).json({ message: "User updated successfully", userData: updatedUser });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  };


  // Reset Password Logic
const resetPassword = async (req, res) => {
    try {
        const { rollno, newPassword } = req.body;

        // Check if the roll number exists
        const user = await User.findOne({ rollno });
        if (!user) {
            return res.status(400).json({ message: "Roll Number not found" });
        }

        // Hash the new password and save it
        user.password = newPassword; // This will be hashed automatically in the pre-save hook
        await user.save();

        res.status(200).json({ message: "Password reset successfully" });
    } catch (err) {
        console.error("Reset Password error:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
module.exports = { home, register,verifyOTP, login, user, updateUser,resetPassword };
