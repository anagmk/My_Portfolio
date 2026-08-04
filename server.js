import "dotenv/config";
import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json({ limit: "20kb" }));

const requiredEnv = ["SMTP_HOST", "SMTP_USER", "SMTP_PASS", "CONTACT_TO_EMAIL"];
const isMailConfigured = requiredEnv.every((key) => process.env[key]);

const transporter = isMailConfigured
  ? nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  : null;

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body ?? {};
  const cleanName = typeof name === "string" ? name.trim() : "";
  const cleanEmail = typeof email === "string" ? email.trim() : "";
  const cleanMessage = typeof message === "string" ? message.trim() : "";

  if (!cleanName || !cleanEmail || !cleanMessage) {
    return res.status(400).json({ message: "Please complete every field." });
  }

  if (!/^\S+@\S+\.\S+$/.test(cleanEmail)) {
    return res.status(400).json({ message: "Please enter a valid email address." });
  }

  if (!transporter) {
    return res.status(503).json({ message: "Email service is not configured yet." });
  }

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER,
      to: process.env.CONTACT_TO_EMAIL,
      replyTo: cleanEmail,
      subject: `Portfolio contact from ${cleanName}`,
      text: `Name: ${cleanName}\nEmail: ${cleanEmail}\n\nMessage:\n${cleanMessage}`,
    });

    return res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact email failed:", error.message);
    return res.status(500).json({ message: "Unable to send your message. Please try again later." });
  }
});

app.listen(port, () => {
  console.log(`Contact API is running at http://localhost:${port}`);
  if (!isMailConfigured) {
    console.warn("Email is not configured. Add SMTP values to .env before sending messages.");
  }
});
