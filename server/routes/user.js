const express = require("express");
const router = express.Router();
const protect = require("../middleware/auth");
const { validateUserOwner } = require("../validators/user");
const { getClients, getUser, updateUser, postClient, deleteClient } = require("../controllers/user");

router.route("/").get(protect, getClients);

router.route("/users/:id").patch(updateUser);

router.route("/:id").delete(protect, validateUserOwner, deleteClient);

router.route("/").post(protect, postClient);

module.exports = router;
