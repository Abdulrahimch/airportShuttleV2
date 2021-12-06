const Payment = require('../models/payment');

exports.isPaymentOwner = async (req, res, next) => {
    const agencyId = req.user.id;
    const paymentId = req.params.id;
    
    const payment = await Payment.findById(paymentId);
    const isOwner = agencyId === payment.agency.toString();
    if (!isOwner) throw new Error('This payment does not belong to this agency');

    next();
};

