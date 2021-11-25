const mongoose = require('mongoose');

const reservationSchema = mongoose.Schema({
    passengers: Array,
    driverNote: String,
    from:{
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    flightNo: {
        type: String,
        required: true
    },
    pax: {
        type: Number,
        required: true
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
    selectedDate: {
        type: Date,
        required: true
    },
    timezone: Number,
});

module.exports = Reservation = mongoose.model("reservation", reservationSchema);
