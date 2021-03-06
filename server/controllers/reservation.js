const User = require("../models/User");
const Reservation = require("../models/reservation");
const Payment = require("../models/payment");
const asyncHandler = require("express-async-handler");
const ObjectId = require("mongoose").Types.ObjectId;
const calculateShuttleCost = require('../utils/calculateShuttleCost');

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

    const airport = from.includes('airport') ? from : to;
    
    newReservation.cost = calculateShuttleCost(user, airport, pax)

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
    const confirmedReservations = await Reservation.find({ client: req.user.id, confirmed: true })
                                    .populate({ path: 'driver', select: { _id: 0, agency: 0 } });

    const unConfirmedReservations = await Reservation.find({ client: req.user.id, confirmed: false })

    if (confirmedReservations || unConfirmedReservations) {
        res.status(200).json({
            success: {
                reservations: {
                    confirmedReservations,
                    unConfirmedReservations
                }
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

exports.getMyDetailsStat = asyncHandler(async (req, res, next) => {
    const fromDate = new Date(req.query.from);
    const toDate = new Date(req.query.to);
    const id = req.params.id;
    const reservations = await Reservation.aggregate([
        { $match: {
            $expr: {
                $and: [
                    {$eq: ['$client', ObjectId(id)]},
                    {$eq: ['$status', 'processed'] },
                    {$gte: ['$selectedDate', fromDate]},
                    {$lte: ['$selectedDate', toDate]}
                ]
            }
        } }
    ]);
    const payments = await Payment.aggregate([
        { $match: {
            $expr: {
                $and: [
                    {$eq: ['$client', ObjectId(id)]},
                    {$eq: ['$status', 'paid'] },
                    {$gte: ['$createdAt', fromDate]},
                    {$lte: ['$createdAt', toDate]}
                ]
            }
        } }
    ]);
    res.status(200).json({ 
        success: {
            reservations,
            payments
        }
    });
});