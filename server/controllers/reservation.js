const User = require("../models/User");
const Reservation = require("../models/reservation");
const asyncHandler = require("express-async-handler");
const ObjectId = require("mongoose").Types.ObjectId;

exports.postReservation = asyncHandler(async (req, res, next) => {
    const newReservation = {
        type,
        from,
        to,
        pax,
        property,
        passenger,
        driverNote,
        flightNo,
        selectedDate,
        timezone,
    } = req.body;

    const user = await User.findById(req.user.id);

    const reservation = await Reservation.create({
        client: ObjectId(req.user.id),
        agency: ObjectId(user.agencyId),
        ...newReservation
    });

    if (reservation){
        res.status(201).json({
            success: {
                reservation
            }
        })
    } else {
        res.status(500);
        throw new Error("Internal Server Error");
      }
});

exports.updateReservation = asyncHandler(async (req, res, next) => {
    id = req.params.id;
    const updates = {
        type,
        from,
        to,
        pax,
        property,
        passenger,
        driverNote,
        flightNo,
        selectedDate,
        timezone,
    } = req.body;
    
    options = { new: true};
    const reservation = await Reservation.findByIdAndUpdate(id, updates, options);

    if (reservation){
        res.status(200).json({
            success: {
                reservation
            }
        })
    } else {
        res.status(500);
        throw new Error("Internal Server Error");
      }
});

exports.getReservations = asyncHandler(async (req, res, next) => {
    const reservations = await Reservation.find({ client: req.user.id });

    if (reservations) {
        res.status(200).json({
            success: {
                reservations
            }
        });
    } else {
        res.status(500);
        throw new Error("Internal Server Error")
    }
});

exports.deleteReservation = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const reservation = await Reservation.findOneAndDelete({ _id: id });
    if (reservation) {
        res.status(200).json({
            success: {
                reservation
            }
        });
    } else {
        res.status(500);
        throw new Error("Internal Server Error")
    }
});

