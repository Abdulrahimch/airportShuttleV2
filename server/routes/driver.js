const express = require('express');
const router = express.Router();
const protect = require("../middleware/auth");
const { postDriver,
        updateDriver,
        getDriver,
        getDrivers,
        deleteDriver } = require('../controllers/driver');

router.route("/").post(protect, postDriver);

router.route("/:id").patch(protect, updateDriver);

router.route("/all").get(protect, getDrivers);

router.route("/:id").get(protect, getDriver);

router.route("/delete/:id").get(protect, deleteDriver);

module.exports = router;