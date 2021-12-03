const express = require('express');
const router = express.Router();
const protect = require("../middleware/auth");
const { postPayment } = require('../controllers/agencyPayment');

router.route("/").post(protect, postPayment);

module.exports = router;