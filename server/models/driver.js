const mongoose = require('mongoose');

const driverSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            requried: true
        },
        lastName: {
            type: String,
            requried: true
        },
        email: {
            type: String,
            requried: true,
            unique: true
        },
        img: {
            type: String,
        },
        carNumber: {
            type: String,
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