const express = require('express');
const router = express.Router();
const protect = require("../middleware/auth");
const { isPaymentOwner } = require('../validators/agencyPayment');
const { postPayment, getClientPayment, updatePayment } = require('../controllers/agencyPayment');

router.route("/").post(protect, postPayment);

router.route("/:id").patch(protect, isPaymentOwner, updatePayment);

router.route("/:id").get(protect, getClientPayment);

module.exports = router;