const express = require('express');
const router = express.Router();
const protect = require("../middleware/auth");
const {  validateCreateUpdateReservation, validateReservationOwner } = require('../validators/reservation');
const { 
        postReservation, 
        updateReservation, 
        getReservations, 
        deleteReservation
       } = require('../controllers/reservation');

router.route("/").post(protect, validateCreateUpdateReservation, postReservation);

router.route("/").get(protect, getReservations);

router.route("/:id").delete(protect, validateReservationOwner, deleteReservation);

router.route("/:id")
        .patch(protect, validateReservationOwner, validateCreateUpdateReservation, updateReservation);

module.exports = router;