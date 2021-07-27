import mongoose  from "mongoose"

const postSchema = mongoose.Schema({
    title:{
        type:"String",
        required:true
    },
    creator:{
        type:"String"
    },
    selectedFile:{
        type:"String"
    },
    likesCount:{
        type:"Number",
        default:0,
    },
    message:{
        type:"String"
    },
    tags:{
        type:"String"
    }
})

const post = mongoose.model("MemoryPosts",postSchema)

export default post