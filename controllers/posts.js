import mongoose from "mongoose";
import Post from "../models/post.js";

export const getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find();
    res.json(allPosts);
  } catch (error) {
    res.json({ message: error });
  }
};

export const createPost = async (req, res) => {
  const temp = new Post({
    title: req.body.title,
    creator: req.body.creator,
    selectedFile: req.body.selectedFile,
    message: req.body.message,
    tags: req.body.tags
  });
  try {
    const newPost = await Post.create(temp);
    res.json(newPost);
  } catch (error) {
    res.json({ message: error });
  }
};

export const updatePost = async (req, res) => {
  const _id = req.params.id;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status("404").send("No post with this id.");
  try {
    const updatedPost = await Post.findByIdAndUpdate(_id, post, { new: true });
    // const updatedPost = await Post.updateOne({"_id":_id},{$set:{post}})
    res.json(updatedPost);
  } catch (error) {
    res.json({ message: error });
  }
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status("404").send("No post with this id.");
  try {
    // const deletedPost = await Post.deleteOne({_id:req.params.id})
    const deletedPost = await Post.findByIdAndRemove(id);

    res.json(deletedPost);
  } catch (error) {
    res.json({ message: error });
  }
};

export const likePost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status("404").send("No post with this id.");
  try {
    const post = await Post.findById(id);
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { likesCount: post.likesCount + 1 },
      { new: true }
    );
    res.json(updatedPost);
  } catch (error) {
    res.json({ message: error });
  }
};
