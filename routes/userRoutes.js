const express = require("express");
const router = express.Router();
const userController = require("../controller/userController");
const { unlink } = require("./productRoutes");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({
  limits: {
    fieldSize: 1024 * 1024 * 10, // Increase the field size limit to 10MB (adjust as needed)
  },
});
router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.put(
  "/profile",
  upload.single("image"),
  userController.updateUserProfile
);
module.exports = router;
