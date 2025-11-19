import express from "express";
import authRouter from "./routes/auth.routes";
const app = express();
app.use(express.json());
app.get("/", (req, res) => { res.json({ message: "Miau Miau" }); });
app.use(authRouter);
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
export default app;
