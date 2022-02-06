const User = require("../models/User");
const Payment = require("../models/payment")
const Reservation = require("../models/reservation");
const asyncHandler = require("express-async-handler");
const ObjectId = require("mongoose").Types.ObjectId;

exports.getReservations = asyncHandler(async (req, res, next) => {
    const fromDate = new Date(req.query.from);
    const toDate = new Date(req.query.to);

    const reservations = await Reservation.find({
            $and: [
                { status: { $eq: 'waiting' } },
                { agency: { $eq: ObjectId(req.user.id) } },
                { selectedDate: { $gte: fromDate }},
                { selectedDate: { $lte: toDate } }
            ]
        }        
    ).populate({ path: 'client', select: { propertyName: 1 } });

    if (reservations) {
        res.status(200).json({
            success: {
                reservations
            }
        });
    } else {
        res.status(500);
        throw new Error("Internal Server Error");
    }

});

exports.getClientReservations = asyncHandler(async (req, res, next) => {
    const agencyId = req.user.id;
    const clientId = req.params.id;
    const reservations = await Reservation.find({ 
                                                    agency: agencyId, 
                                                    client: clientId, 
                                                    status: 'processed' 
                                                });
    if (reservations) {
        res.status(200).json({
            success: {
                reservations
            }
        })
    } else {
        res.status(500);
        throw new Error("Internal Server Error");
    }

});

exports.updateReservation = asyncHandler(async (req, res, next) => {
    const updates = { status, confirmed, driver } = req.body;
    if (driver) {
        updates.driver = ObjectId(driver);
    }
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

exports.getClientReservationPaymentStat = asyncHandler(async (req, res, next) => {
    const agencyId = req.user.id;
    const clientId = req.params.id;
    const fromDate = new Date(req.query.from);
    const toDate = new Date(req.query.to);

    const reservations = await Reservation.find({ 
        $and: [
            { agency: { $eq: ObjectId(agencyId) } },
            { client: { $eq: ObjectId(clientId) } },
            { status: { $eq: 'processed'} },
            { selectedDate: { $gte: fromDate } },
            { selectedDate: { $lte: toDate } }
        ]
    });

    const payments = await Payment.find({
        $and: [
            { agency: { $eq: ObjectId(agencyId) } }, 
            { client: { $eq: ObjectId(clientId) } }, 
            { status: { $eq: 'paid'} },
            { createdAt: { $gte: fromDate } },
            { createdAt: { $lte: toDate } }
        ] 
    }).populate({
                path: '$client', 
                select: { property: 1, email: 1 }
    });

    res.status(200).json({ 
        success: {
            reservations,
            payments
        }
    });

});

exports.unconfirmedReservations = asyncHandler(async (req, res, next) => {
    const agencyId = req.user.id;
    const reservations = await Reservation.aggregate([
        {
            $match: {
                $expr: {
                    $and: [
                        { $eq: ['$agencyId', ObjectId(agencyId)] },
                        { $eq: ['$confirmed', false] } 
                    ]
                }
            }
        },
        {
            $group: {
                _id: null,
                total: { $sum: 1 } 
            }
        }
    ]);
    console.log(reservations)
});