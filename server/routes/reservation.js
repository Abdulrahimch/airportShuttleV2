const express = require('express');
const router = express.Router();
const protect = require("../middleware/auth");
const { postReservation, getReservations, deleteReservation } = require('../controllers/reservation');

router.route("/").post(protect, postReservation);

router.route("/").get(protect, getReservations);

router.route("/:id").delete(protect, deleteReservation);

module.exports = router;