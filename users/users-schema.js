import mongoose from "mongoose";
import { boolean } from "webidl-conversions";

const usersSchema = mongoose.Schema({
    username: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    email: String,
    firstName: String,
    lastName: String,
    role: {type: String, enum: ['ADMIN', 'USER'], default: 'USER'},
    banned: {type: Boolean, default: false}
}, {collection: 'users'})

export default usersSchema