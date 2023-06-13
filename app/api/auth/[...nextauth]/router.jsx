import User from "@models/user";
import { connecTodb } from "@utils/database";
import { NextAuth } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";
// console.log("Hello");
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    async session({ session }) {
        const sessionUser = await User.findOne({
            email: session.user.email
        })

        session.user.id = sessionUser._id.toString();
        return session;
    },
    async signIn({ profile }) {
        //every route in nextjs something called serverless route. when ever we make a call to db that time only reosne will come out from, ultill that connection has to be established.

        try {
            await connecTodb();
            //check if the user is already existed
            const UserExists = await User.findOne({
                email: profile.email
            })
            //if not then create a new user, for this we need to create a model to signup the user into the databse.
            //in models folder we need to create the schema for signup pattern

            //if not create a new user
            if (!UserExists) {
                await User.create({
                    email: profile.email,
                    username: profile.name.replace(" ", "").toLowercase(),
                    image: profile.picture
                })
            }

            return true;
        } catch (error) {
            console.log(error);
            return false;
        }

    }
})

export { handler as GET, handler as POST }
