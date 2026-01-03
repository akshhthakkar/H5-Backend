require("dotenv").config();
const nodemailer = require("nodemailer");

// Create Resend SMTP transporter (ONCE)
const transporter = nodemailer.createTransport({
  host: "smtp.resend.com",
  port: 587,
  secure: false,
  auth: {
    user: "resend",
    pass: process.env.RESEND_API_KEY,
  },
});

// Verify connection on startup
transporter.verify((error) => {
  if (error) {
    console.error("❌ Resend SMTP error:", error);
  } else {
    console.log("✅ Resend SMTP ready");
  }
});

async function sendEmail(to, subject, text, attachmentPath = null) {
  const mailOptions = {
    from: `H5 ERP <${process.env.EMAIL_FROM}>`,
    to,
    subject,
    text,
    attachments: attachmentPath
      ? [{ filename: "bill.pdf", path: attachmentPath }]
      : [],
  };

  await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;
