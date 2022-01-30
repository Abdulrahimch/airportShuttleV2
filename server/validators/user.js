const User = require("../models/User");

exports.validateUserOwner = async (req, res, next) => {
    const agencyId = req.user.id;
    const userId = req.params.id;

    const user = await User.findById(userId);

    const isUserOwner = user.agencyId.toString() === agencyId;

    if (!isUserOwner){
        res.status(400);
        throw new Error("This reservation does not belong to relevant client!");
    };

    next();
};
