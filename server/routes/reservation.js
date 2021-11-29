const express = require('express');
const router = express.Router();
const protect = require("../middleware/auth");
const {  validateCreateUpdateReservation } = require('../validators/reservation');
const { 
        postReservation, 
        updateReservation, 
        getReservations, 
        deleteReservation
       } = require('../controllers/reservation');

router.route("/").post(protect, validateCreateUpdateReservation, postReservation);

router.route("/:id").patch(protect, validateCreateUpdateReservation, updateReservation);

router.route("/").get(protect, getReservations);

router.route("/:id").delete(protect, deleteReservation);

module.exports = router;