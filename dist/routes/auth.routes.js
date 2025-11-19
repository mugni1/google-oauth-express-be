import { authGoogleUrl } from "../configs/oauth";
import { googleCallback } from "../controllers/auth.controller";
import { Router } from "express";
const router = Router();
router.get("/auth/google", (_, res) => { res.redirect(authGoogleUrl); });
router.get("/auth/google/callback", googleCallback);
export default router;
