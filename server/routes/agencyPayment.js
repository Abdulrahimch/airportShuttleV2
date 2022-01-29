const express = require('express');
const router = express.Router();
const protect = require("../middleware/auth");
const { isPaymentOwner } = require('../validators/agencyPayment');
const { postPayment, getClientPayment, updatePayment, getMyPayments } = require('../controllers/agencyPayment');

router.route("/").post(protect, postPayment);

router.route("/:id").patch(protect, isPaymentOwner, updatePayment);

router.route("/:id").get(protect, getClientPayment);

router.route("/").get(protect, getMyPayments);

module.exports = router;