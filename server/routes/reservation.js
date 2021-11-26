const express = require('express');
const router = express.Router();
const protect = require("../middleware/auth");
const { postReservation } = require('../controllers/reservation');

router.route("/").post(protect, postReservation);

module.exports = router;