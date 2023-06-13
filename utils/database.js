import mongoose from "mongoose";

let isConnected = false;//track the comnection status

export const connecTodb = async () => {
    //seting mngoose options
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log("MongoDB is already Connected");
        //then we need to stop reconnection
        return;
    }

    //if its not connected then we will go with below approach
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true;
        console.log("MongoDB is Connected");
    } catch (error) {
        console.log(error);
    }
}
