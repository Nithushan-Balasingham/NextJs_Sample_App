import { NextResponse } from "next/server";
import Post from "@/models/Post";
import connect from "@/utils/db";

export const GET = async (request,{params}) =>{
    const{id} = params
    try {
        await connect()
        const posts = await Post.findById(id)
        return new NextResponse(JSON.stringify(posts),{status:200})
    } catch (error) {
        return new NextResponse("Error",{status:500})

    }
}

export const DELETE = async (request,{params}) =>{
    const{id} = params
    try {
        await connect()
         await Post.findByIdAndDelete(id)
        return new NextResponse("DELETED",{status:200})
    } catch (error) {
        return new NextResponse("Error",{status:500})

    }
}