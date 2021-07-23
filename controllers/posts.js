import mongoose from "mongoose"
import Post from "../models/post.js"

export  const getAllPosts = async (req,res)=>{

    try {
        const allPosts = await Post.find()
        res.json(allPosts)
    } catch (error) {
        res.json({message:error})
    }
}

export const createPost = async(req,res)=>{
    const temp = new Post({
        title:req.body.title,
        description:req.body.description,
        selectedFile:req.body.selectedFile,
        
    })
    try {
        const newPost = await Post.create(temp)
        res.json(newPost)
    } catch (error) {
        res.json({message:error})
    }
}

export const updatePost = async (req,res) =>{
    const _id = req.params.id
    const post = req.body
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status("404").send("No post with this id.")
    try {
        const updatedPost = await Post.findByIdAndUpdate(_id, post, {new: true})
    } catch (error) {
        res.json({message:error})
    }
}

