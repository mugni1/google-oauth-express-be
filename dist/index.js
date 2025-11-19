import express from "express";
import authRouter from "./routes/auth.routes";
const app = express();
app.use(express.json());
app.get("/", (req, res) => { res.json({ message: "Miau Miau" }); });
app.use(authRouter);
app.listen(() => console.log("Server running"))
export default app;
