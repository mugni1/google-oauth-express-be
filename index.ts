import express from "express";
import authRouter from "@/routes/auth.routes";
  
const app = express()
app.use(express.json())
app.use(authRouter)

const HOST = process.env.HOST_APP || '0.0.0.0';
const PORT = Number(process.env.PORT_APP) || 5050;
app.listen(PORT, HOST, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
