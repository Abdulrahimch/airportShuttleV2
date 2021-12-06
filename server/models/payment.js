const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema(
    {
        type: {
            type: String,
            requried: true
        },
        note: String,
        paid: {
            type: Number,
            default: 0,
            requried: true
        },
        currency: {
            type: String,
            required: true,
            enum: ['TL', 'USD', 'EUR']
        },
        exchangeRate: {
            type: Number,
            default: 1,

        },
        paidInTL: {
            type: Number,
            default: 1
        },
        agency: {
            type: mongoose.Types.ObjectId, 
            required: true, 
            ref: "user"
        },
        client: {
            type: mongoose.Types.ObjectId, 
            required: true, 
            ref: "user"
        },
        status: {
            type: String,
            trim: true,
            default: 'paid',
            enum: ['paid', 'canceled']
        }
    },
    {
        timestamps: true
    }
);

module.exports = Payment = mongoose.model("payment", paymentSchema);
