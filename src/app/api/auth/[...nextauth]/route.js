import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt"
import connect from "@/utils/connectDb";
import User from "@/models/User";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "Credentials",
            async authorize(credentials) {
                await connect()

                try {
                    const user = await User.findOne({ email: credentials.email })

                    if (user) {
                        const isPassword = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );

                        if (isPassword) {
                            return user;
                        } else {
                            throw new Error("Wrong Password")
                        }
                    } else {
                        throw new Error("User not found")
                    }
                } catch (error) {
                    throw new Error(error)
                }
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    pages: {
        error: "/dashboard/login"
    },
})

export { handler as GET, handler as POST };
