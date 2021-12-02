const express = require('express');
const router = express.Router();
const protect = require("../middleware/auth");
const { validateUpdateReservation, validateReservationOwner } = require('../validators/agencyReservation');

const { getReservations, updateReservation } = require('../controllers/agencyReservation');

router.route("/").get(protect, getReservations);

router.route("/:id")
    .patch(protect, validateReservationOwner, validateUpdateReservation, updateReservation);

module.exports = router;