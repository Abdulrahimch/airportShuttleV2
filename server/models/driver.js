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
            default: 'https://airportshuttle0.s3.amazonaws.com/defaultAvatar.png'
        },
        carNumber: {
            type: String,
        },
        agency: {
            type: mongoose.Types.ObjectId, 
            required: true, 
            ref: "user"
        },
        phoneNumber: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = Driver = mongoose.model("driver", driverSchema);