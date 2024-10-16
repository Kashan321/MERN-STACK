
import mongoose from "mongoose";

const schema = mongoose.Schema;

const UserSchema = new schema ({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    }
})

const userModal = mongoose.model("User", UserSchema)
export default userModal;