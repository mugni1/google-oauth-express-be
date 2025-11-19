import express from "express";
import authRouter from "./src/routes/auth.routes";
const app = express();
app.get("/", (req, res) => { res.json({ message: "Miau Miau" }); });
app.use(express.json());
app.use(authRouter);
export default app;
