import express, { Request, Response } from "express";
import authRouter from "./src/routes/auth.routes";

const app = express()
app.get("/", (req: Request, res: Response) => { res.json({ message: "Miau Miau" }) })
app.use(express.json())
app.use(authRouter)
export default app;
