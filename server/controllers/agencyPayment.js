const Payment = require('../models/payment');
const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const ObjectId = require("mongoose").Types.ObjectId;

exports.postPayment = asyncHandler(async (req, res, next) => {
    const newPayment = {
        clientId,
        type,
        note,
        paid,
        currency,
        exchangeRate,
        paidInTL
    } = req.body;

    const payment = await Payment.create({
        agency: ObjectId(req.user.id),
        client: ObjectId(clientId),
        ...newPayment
    });

    if (payment) {
        const user = await User.findById(clientId);
        user.debt = user.debt - paidInTL;
        await user.save();

        res.status(201).json({
            success: {
                payment
            }
        })
    } else {
        res.status(500);
        throw new Error('External Error')
    }
});