import User from "@/models/User";
import connect from "@/utils/connectDb";
import bcrypt from "bcrypt"
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const { name, email, password } = await request.json();
    // const body = await request.json();

    // console.log(name, email, password)
    // console.log(body)

    const hashedPassword = await bcrypt.hash(password, 10);
    // console.log(hashedPassword)
    const newUser = new User({
        name,
        email,
        password: hashedPassword,
    });
    // console.log(newUser)

    try {
        await connect();

        await newUser.save();

        return new NextResponse("User created", {
            status: 201,
        });
    } catch (error) {
        return new NextResponse(error.message, {
            status: 500,
        });
    }
};