import { Schema, model, models } from "mongoose";

const UserSchema = newSchema({
    email: {
        type: String,
        //if the given email is true then it will add into the database,if its not true then it will though the "Email already Existed.".
        unique: [true, "Email already Existed.."],
        required: [true, "Email is Required..."]
    },
    username: {
        type: String,
        required: [true, "User Name is Required"],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String
    }
})

//if we are working with regular expressiions or backend stuff or models schema creation we nedd to follow below approach
//if the user model is not there in the models then onlu create newschema or new model if exists dont create
const User = models.User || model("User", UserSchema);
export default User;