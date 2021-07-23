import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import mongoose from "mongoose"
import "dotenv/config"
import postRoutes from "./routes/posts.js"

const app = express()
app.use(bodyParser.json({limit:"30mb", extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb", extended: true}))
app.use(cors())
app.use("/",postRoutes)

mongoose.connect(process.env.DB_CONNECTION_URL,{ useUnifiedTopology: true , useNewUrlParser: true, useFindAndModify: false})
.then(res=>{
    app.listen(process.env.PORT,()=>{
        console.log(`Server started at Port: ${process.env.PORT}`)
    })
})
.catch(err=>console.log(err.message))

