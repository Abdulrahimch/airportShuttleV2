const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { getClients, getUser, updateUser, postClient } = require("../controllers/user");

router.route("/").get(protect, getClients);

router.route("/users/:id").patch(updateUser);

router.route("/").post(protect, postClient);

module.exports = router;
