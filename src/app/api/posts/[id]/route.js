import { NextResponse } from "next/server"
import connect from "@/utils/connectDb"
import Post from "@/models/Post";

export const GET = async (request, { params }) => {
    const { id } = params;
    // console.log(id + params)
    // console.log(request)
    try {
        await connect()
        const posts = await Post.findById(id);
        // console.log(posts)
        return new NextResponse(JSON.stringify(posts), { status: 200 })
    } catch (error) {
        return new NextResponse('Database Error', { status: 500 })
    }
}

export const DELETE = async (request, { params }) => {
    const { id } = params;
    try {
        await connect()
        await Post.findByIdAndDelete(id);
        return new NextResponse("Post deleted", { status: 200 })
    } catch (error) {
        return new NextResponse('Database Error', { status: 500 })
    }
}