const express = require('express');
const router = express.Router();
const protect = require("../middleware/auth");
const { getReservations } = require('../controllers/agencyReservation');

router.route("/").get(protect, getReservations);

module.exports = router;