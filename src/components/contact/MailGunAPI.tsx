// mailgunApi.ts
import express, { Router } from "express";
import axios, { AxiosResponse, AxiosError } from "axios";
import { Request, Response } from "express";

const apiKey: string = process.env.MAILGUN_API_KEY || "";
const domain: string = process.env.MAILGUN_DOMAIN || "";

const router: Router = express.Router();

interface EmailRequestBody {
  name: string;
  email: string;
  message: string;
}

router.post(
  "/send-email",
  async (req: Request<{}, {}, EmailRequestBody>, res: Response) => {
    const { name, email, message } = req.body;

    if (!apiKey || !domain) {
      console.error("Missing Mailgun API key or domain");
      res
        .status(500)
        .json({ success: false, message: "Missing Mailgun API key or domain" });
      return;
    }

    try {
      const response: AxiosResponse = await axios.post(
        `https://api.mailgun.net/v3/${domain}/messages`,
        {
          from: "your@email.com",
          to: "recipient@email.com",
          subject: "Subject of your email",
          text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        },
        {
          auth: {
            username: "api",
            password: apiKey,
          },
        }
      );

      console.log("Email sent:", response);
      res
        .status(200)
        .json({ success: true, message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "Error sending email" });
    }
  }
);

export default router;
