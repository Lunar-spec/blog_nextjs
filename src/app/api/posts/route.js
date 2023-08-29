import { NextResponse } from "next/server"
import connect from "@/utils/connectDb"
import Post from "@/models/Post";

export const GET = async (request) => {

    const url = new URL(request.url)

    const username = url.searchParams.get("username");

    try {
        await connect()
        const posts = await Post.find(username && { username });
        return new NextResponse(JSON.stringify(posts), { status: 200 })
    } catch (error) {
        return new NextResponse('Database Error', { status: 500 })
    }
}

export const POST = async (request) => {
    const body = await request.json();

    const newPost = new Post(body);

    try {
        await newPost.save();
        return new NewResponse("Post created", { status: 200 })
    } catch (error) {
        return new NextResponse('Database Error', { status: 500 })
    }
}