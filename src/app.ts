import express, { Application, NextFunction, Request, Response } from "express"
import cors from "cors"
const app: Application = express()
app.use(cors())
app.use(express.json())


app.get('/health' , async(req : Request , res: Response) => {
    res.send("E-commerce server is running")
})

app.all('*' , (req:Request , res:Response) => {
    res.status(404).json({
        success: false,
        message:"No route matched like that"
    })
})

app.use((error:any , req: Request , res: Response , next: NextFunction) => {
    if(error){
        res.status(500).json({
            success: false,
            message:"Something went wrong"
        })

    }

})

export default app