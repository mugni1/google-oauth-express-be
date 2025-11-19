import { authClient, authGoogleUrl } from "@/configs/oauth";
import { google } from "googleapis";
export const googleRedirect = (req, res) => {
    res.redirect(authGoogleUrl);
};
export const googleCallback = async (req, res) => {
    const code = req.query.code;
    try {
        // set credentials
        const { tokens } = await authClient.getToken(code);
        authClient.setCredentials(tokens);
        // get user info
        const oauth2 = google.oauth2({
            auth: authClient,
            version: "v2"
        });
        const { data: userInfo } = await oauth2.userinfo.get();
        res.redirect(`${process.env.FE_ORIGIN_URL}?email=${userInfo.email}&avatar=${userInfo.picture}&name=${userInfo.name}&provider=google`);
    }
    catch {
        res.status(500).send("Something went wrong");
    }
};
