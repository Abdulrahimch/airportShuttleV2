const Driver = require("../models/User");
const Reservation = require("../models/reservation");
const asyncHandler = require("express-async-handler");
const ObjectId = require("mongoose").Types.ObjectId;

//Post Driver
exports.postDriver = asyncHandler(async (req, res, next) => {
    const agencyId = req.user.id;
    const newDriver = {name, email, img, carNumber} = req.body;

    const driver = await Driver.create({
        agency: agencyId,
        ...newDriver
    });

    if (driver) {
        res.status(201).json({
            success: {
                driver
            }
        });
    } else {
        res.status(500);
        throw new Error('Server Error');
    }

});

//Update Driver
exports.updateDriver = asyncHandler(async (req, res, next) => {
    const driverId = req.params.id;
    const updates = {name, email, img, carNumber} = req.body;

    const driver = await Driver.findByIdAndUpdate(
        driverId,
        { updates },
        { new: true }
    );

    if (driver) {
        res.status(201).json({
            success: {
                driver
            }
        });
    } else {
        res.status(500);
        throw new Error('Server Error');
    }

});

//Get a driver
exports.getDriver = asyncHandler(async (req, res, next) => {
    const driverId = req.params.id;
    const driver = await Driver.findById(driverId);

    if (driver) {
        res.status(201).json({
            success: {
                driver
            }
        });
    } else {
        res.status(500);
        throw new Error('Server Error');
    }
});

//Delete driver
exports.deleteDriver = asyncHandler(async (req, res, next) => {
    const driverId = req.params.id;
    const driver = await Driver.findByIdAndDelete(driverId);

    if (driver) {
        res.status(201).json({
            success: {
                driver
            }
        });
    } else {
        res.status(500);
        throw new Error('Server Error');
    }
});

//Get All drivers
exports.getDrivers = asyncHandler(async (req, res, next) => {
    const agencyId = req.user.id;
    const drivers = await Driver.find({ agency: agencyId });

    if (drivers) {
        res.status(201).json({
            success: {
                drivers
            }
        });
    } else {
        res.status(500);
        throw new Error('Server Error');
    }
});