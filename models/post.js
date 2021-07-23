import mongoose  from "mongoose"

const postSchema = mongoose.Schema({
    title:{
        type:"String",
        required:true
    },
    description:{
        type:"String"
    },
    selectedFile:{
        type:"String"
    }
})

const post = mongoose.model("MemoryPosts",postSchema)

export default post