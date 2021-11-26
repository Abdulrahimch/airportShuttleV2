const User = require("../models/User");
const Reservation = require("../models/reservation");
const asyncHandler = require("express-async-handler");
const ObjectId = require("mongoose").Types.ObjectId;

exports.postReservation = asyncHandler( async (req, res, next) => {
    const newReservation = {
        type,
        from,
        to,
        pax,
        property,
        fullName,
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

