import { NextAuth } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { signIn } from "next-auth/react";
console.log("Hello");
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    async session({ session }) {

    },
    async signIn({ profile }) {
        //every route in nextjs something called serverless route. when ever we make a call to db that time only reosne will come out from, ultill that connection has to be established.
    }
})

export { handler as GET, handler as POST }