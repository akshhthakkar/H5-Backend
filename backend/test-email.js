require("dotenv").config();
const nodemailer = require("nodemailer");

console.log("RESEND_API_KEY:", process.env.RESEND_API_KEY ? "✅ Set" : "❌ Missing");
console.log("EMAIL_FROM:", process.env.EMAIL_FROM);

const transporter = nodemailer.createTransport({
  host: "smtp.resend.com",
  port: 587,
  secure: false,
  auth: {
    user: "resend",
    pass: process.env.RESEND_API_KEY,
  },
});

async function testEmail() {
  try {
    console.log("\n🔄 Sending test email...");
    
    const info = await transporter.sendMail({
      from: `H5 ERP <${process.env.EMAIL_FROM}>`,
      to: "inframax07@gmail.com",
      subject: "Test Email from H5 ERP",
      html: "<h1>Test Successful!</h1><p>Your Resend integration is working correctly.</p>",
    });

    console.log("✅ Email sent successfully!");
    console.log("Message ID:", info.messageId);
    console.log("Response:", info.response);
  } catch (error) {
    console.error("❌ Email failed:");
    console.error("Error message:", error.message);
    console.error("Error code:", error.code);
    console.error("Full error:", error);
  }
}

testEmail();
