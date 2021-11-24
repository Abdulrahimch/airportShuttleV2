const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { searchUsers, getUser, updateUser, postClient } = require("../controllers/user");

router.route("/").get(protect, searchUsers);

router.route("/users/:username").get(getUser);

router.route("/users/:id").patch(updateUser);

router.route("/").post(protect, postClient);

module.exports = router;
