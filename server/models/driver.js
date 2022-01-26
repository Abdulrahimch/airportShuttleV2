const mongoose = require('mongoose');

const driverSchema = mongoose.Schema(
    {
        name: {
            type: String,
            requried: true
        },
        email: {
            type: String,
            requried: true
        },
        img: {
            type: String,
        },
        carNumber: {
            type: Number,
            default: 1,

        },
        agency: {
            type: mongoose.Types.ObjectId, 
            required: true, 
            ref: "user"
        },
    },
    {
        timestamps: true
    }
);

module.exports = Driver = mongoose.model("driver", driverSchema);