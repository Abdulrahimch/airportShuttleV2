const User = require("../models/User");
const Reservation = require("../models/reservation");
const asyncHandler = require("express-async-handler");
const ObjectId = require("mongoose").Types.ObjectId;

exports.getReservations = asyncHandler(async (req, res, next) => {
    const reservations = await Reservation.find({ agency: req.user.id, status: 'waiting' })
                                 .populate({path: 'client', select: { property: 1 }})
                                 
    if (reservations){
        res.status(200).json({
            success: {
                reservations
            }
        });
    }

});

exports.updateReservation = asyncHandler(async (req, res, next) => {
    const updates = { status } = req.body;
    const  id = req.params.id;
    const options = { new: true }
    const reservation = await Reservation.findByIdAndUpdate(id, updates, options);

    if ( status === 'processed' ){
        const userId = reservation.client.toString();
        const user = await User.findById(userId);
        user.debt = user.debt + reservation.cost;
        await user.save();
    }

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