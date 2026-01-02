require("dotenv").config();
const nodemailer = require("nodemailer");

// Create transporter ONCE (singleton)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify connection on startup
transporter.verify((error) => {
  if (error) {
    console.error("❌ Email transporter error:", error);
  } else {
    console.log("✅ Email transporter ready");
  }
});

async function sendEmail(userEmail, subject, body, attachmentPath) {
  const mailOptions = {
    from: `"H5 ERP" <${process.env.EMAIL_USER}>`,
    to: userEmail,
    subject,
    text: body,
    attachments: attachmentPath
      ? [{ filename: "bill.pdf", path: attachmentPath }]
      : [],
  };

  await transporter.sendMail(mailOptions);
}

module.exports = sendEmail;
