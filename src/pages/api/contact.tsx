import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const TO_EMAIL = process.env.TO_EMAIL || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  console.log("Data", req.body);

  const { name, email, message } = req.body;

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({ username: "api", key: API_KEY });

  const messageData = {
    from: "Contact form <contact@mailgun.me.org>",
    to: TO_EMAIL,
    subject: "New Contact Form!",
    text: `
New form entry from: 
${name}
${email}
---------------------------------------------------  
${message}
    `,
  };

  try {
    const emailRes = await client.messages.create(DOMAIN, messageData);
    console.log(emailRes);
  } catch (err: any) {
    console.error("Error sending email", err);
  }

  res.status(200).json({ submitted: true });
}
