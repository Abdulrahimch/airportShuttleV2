const mongoose = require('mongoose');

const paymentSchema = mongoose.Schema({
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
    }
});

paymentSchema.pre('save', async function (next) {
    this.paidInTL = this.paid * this.exchangeRate;
});

module.exports = Payment = mongoose.model("payment", paymentSchema);
