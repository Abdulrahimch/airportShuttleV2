const Payment = require('../models/payment');
const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const ObjectId = require("mongoose").Types.ObjectId;
const { findByIdAndUpdate } = require('../models/payment');

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
        throw new Error('Server Error, please try again later!')
    }
});

exports.updatePayment = asyncHandler(async (req, res, next) => {
    const id = req.params.id;
    const { status, clientId } = req.body;
    options = { new: true };
    const update = await Payment.findByIdAndUpdate(id, { status: status }, options);
    if (update) {
        const user = await User.findById(clientId);
        user.debt = user.debt + update.paidInTL;
        await user.save();
        res.status(200).json({
            success: {
                update
            }
        })
    } else {
        res.status(500)
        throw new Error("server Error, please try again later!");
    }
});

exports.getClientPayment = asyncHandler(async (req, res, next) => {
    const clientId = req.params.id;
    const payment = await Payment.find({
                                            agency: ObjectId(req.user.id), 
                                            client: ObjectId(clientId), 
                                            status: 'paid' 
                                        })
                                        .populate({
                                                    path: 'client', 
                                                    select: {property: 1, email: 1}
                                                });
    
    if (payment) {
        res.status(200).json({
            success: {
                payment
            }
        });
    } else {
        res.status(500);
        throw new Error('Server Error, please try again later!');
    }
});

