import mongoose from "mongoose";
import usersSchema from "./users-schema.js";

const usersModel = mongoose.model('UserModel', usersSchema)

// add an admin account
/*
usersModel.create({
    username: 'admin',
    password: 'password',
    email: '',
    firstName: 'admin',
    lastName: 'account',
    role: 'ADMIN'
})
*/

export default usersModel