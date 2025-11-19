import { authGoogleUrl } from "@/configs/oauth";
import { googleCallback } from "@/controllers/auth.controller";
import { Response, Router } from "express";

const router = Router();
router.get("/", (_, res: Response) => { res.json({ message: "Miau Miau" }) })
router.get("/auth/google", (_, res: Response) => { res.redirect(authGoogleUrl) })
router.get("/auth/google/callback", googleCallback)

export default router;