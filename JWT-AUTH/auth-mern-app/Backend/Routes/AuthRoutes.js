import express from "express"
import AuthValidation from "../Middlewares/AuthValidation.js";
import AuthController from "../Controllers/AuthController.js"

const router = express.Router();

const { signUp, Login } = AuthController
const { signupValidation, LoginValidation } = AuthValidation

router.post("/login", LoginValidation, Login)

router.post("/signup", signupValidation, signUp)


export default router;