import dotenv from "dotenv"
import connectDB from "./db/index.js"
import express from "express"

const app = express()

var port = process.env.PORT

dotenv.config({
    path: './.env'
});


connectDB()
.then( () => {
    app.on("error", () => {
        console.log("Error", error)
    })

    app.listen(port || 8000, () => {
        console.log(`Server successfully running at port ${port}`)
    })
})
.catch( (err) => {
    console.log("MongoDB connection error", err)
})