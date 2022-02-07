const express = require('express');
const router = express.Router();
const protect = require("../middleware/auth");
const { validateUpdateReservation, validateReservationOwner } = require('../validators/agencyReservation');

const { getReservations, 
        getClientReservations, 
        updateReservation, 
        getClientReservationPaymentStat,
        agencyStat, 
        agencyStatInfo } = require('../controllers/agencyReservation');

router.route("/").get(protect, getReservations);

router.route("/stat/").get(protect, agencyStat);

router.route("/statinfo/").get(protect, agencyStatInfo);

router.route("/:id").get(protect, getClientReservations);

router.route("/stat/:id").get(protect, getClientReservationPaymentStat);

router.route("/:id")
    .patch(protect, validateReservationOwner, updateReservation);

module.exports = router;