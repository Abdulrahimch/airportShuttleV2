const express = require('express');
const router = express.Router();
const protect = require("../middleware/auth");
const { validateUpdateReservation, validateReservationOwner } = require('../validators/agencyReservation');

const { getReservations, 
        getClientReservations, 
        updateReservation, 
        getClientReservationPaymentStat,
        unconfirmedReservations, } = require('../controllers/agencyReservation');

router.route("/").get(protect, getReservations);

router.route("/:id").get(protect, getClientReservations);

router.route("/stat/:id").get(protect, getClientReservationPaymentStat);

router.route("/unconfirmed/").get(protect, unconfirmedReservations);


router.route("/:id")
    .patch(protect, validateReservationOwner, updateReservation);

module.exports = router;