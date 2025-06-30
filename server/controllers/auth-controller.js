const User = require("../models/user-model");
const { generateOTP, sendOTPEmail } = require("../utils/otp-utils");
const crypto = require('crypto');
const nodemailer = require('nodemailer');
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


//   // Reset Password Logic
// const resetPassword = async (req, res) => {
//     try {
//         const { rollno, newPassword } = req.body;

//         // Check if the roll number exists
//         const user = await User.findOne({ rollno });
//         if (!user) {
//             return res.status(400).json({ message: "Roll Number not found" });
//         }

//         // Hash the new password and save it
//         user.password = newPassword; // This will be hashed automatically in the pre-save hook
//         await user.save();

//         res.status(200).json({ message: "Password reset successfully" });
//     } catch (err) {
//         console.error("Reset Password error:", err);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User with this email does not exist" });
        }

        // Generate password reset token
        const resetToken = crypto.randomBytes(32).toString('hex');
        const resetPasswordToken = crypto.createHash('sha256').update(resetToken).digest('hex');
        const resetPasswordExpires = Date.now() + 10 * 60 * 1000; // Token valid for 10 minutes

        user.resetPasswordToken = resetPasswordToken;
        user.resetPasswordExpires = resetPasswordExpires;
        await user.save();

        // Send reset link via email
        const resetUrl = `${req.protocol}://${process.env.LOCALHOST_URL}/reset-password/${resetToken}`;

        const message = `
                <div style="text-align: center; padding: 10px;">
                    <img src="https://ptustudyzone.vercel.app/assets/mainlogo-CvKJyAPs.png" alt="PTU Study Zone" style="max-width: 150px;"/>
                </div>
                <h2 style="color: #0275d8;">Hello from PTU Study Zone!</h2>
                <p>We have received a request to Reset your Password.  Please click on the link below to reset your password:</p>
                <div style="font-size: 24px; font-weight: bold; color: #d9534f; padding: 10px; background-color: #f7f7f7; text-align: center;">
                <a href="${resetUrl}">Reset Password Link</a>
                </div>
                <p style="color: #555;">The Link is valid for 10 minutes.</p>
                <p>If you didn't request this, please ignore this email or contact our support team.</p>
                <p style="color: #555;">Thank you for being part of the PTU Study Zone community!</p>
                <hr style="border: none; border-top: 1px solid #ddd;">
                <p style="font-size: 12px; color: #777; text-align: center;">
                    PTU Study Zone | <a href="https://ptustudyzone.vercel.app" style="color: #0275d8; text-decoration: none;">Visit Our Website</a><br>
                    Punjab Technical University
                </p>
            </div>
        `;

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        });

        const mailOptions = {
            from: `"PTU Study Zone" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: 'Password Reset',
            html: message
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: "Password reset email sent" });
    } catch (err) {
        console.error("Forgot password error:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};
const resetPassword = async (req, res) => {
    try {
        const { token } = req.params;
        const { newPassword } = req.body;

        // Hash token and compare with stored reset token
        const hashedToken = crypto.createHash('sha256').update(token).digest('hex');
        const user = await User.findOne({
            resetPasswordToken: hashedToken,
            resetPasswordExpires: { $gt: Date.now() } // Check if token is still valid
        });

        if (!user) {
            return res.status(400).json({ message: "Invalid or expired token" });
        }

        // Update password and clear reset token fields
        user.password = newPassword; // This will be hashed automatically in the pre-save hook
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        res.status(200).json({ message: "Password reset successful" });
    } catch (err) {
        console.error("Reset password error:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


module.exports = { home, register,verifyOTP, login, user, updateUser,resetPassword,forgotPassword };
