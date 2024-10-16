import userModal from "../Models/user.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const signUp = async (req, res) => {

    try {
        const { name, email, password } = req.body
        const user = await userModal.findOne({ email });
        if (user) {
            return res.status(400)
                .json({
                    message: "User already exists",
                    success: false
                })
        }
        const newUser = new userModal({ name, email, password })
        newUser.password = await bcrypt.hash(password, 10)
        await newUser.save()
        res.status(200)
            .json({
                message: "User created successfully",
                success: true
            })

    } catch (error) {
        console.error(error, "error from auth controller")
        res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Login request received for:", email);
        
        const user = await userModal.findOne({ email });
        if (!user) {
            console.log("User not found:", email);
            return res.status(403).json({ message: "Auth failed", success: false });
        }

        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            console.log("Password mismatch for user:", email);
            return res.status(403).json({ message: "Auth failed", success: false });
        }

        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );
        console.log("JWT generated for:", email);

        return res.status(200).json({
            message: "Login successful",
            success: true,
            jwtToken,
            email,
            name: user.name
        });
    } catch (err) {
        console.error("Error during login:", err);
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};

export default {
    signUp,
    Login
}