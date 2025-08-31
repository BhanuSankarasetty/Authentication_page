import express from "express"
import cors from "cors"
import authRouter from "./routes/authRoutes.js"

const app = express()

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json())



app.use('/auth',authRouter)
app.listen(process.env.BACKEND_PORT,()=>{
  console.log(`Backend start sucessfully at ${process.env.BACKEND_PORT}`)
})
