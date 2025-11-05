const express = require("express");
const { register, login, getAllUsers, deleteUser } = require("../controllers/authController");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/users", getAllUsers);
router.delete("/user/:userId", deleteUser);

module.exports = router;