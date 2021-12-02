const { check, validationResult } = require("express-validator");

exports.validateUpdateReservation = [
    check("status", "Error the status does not exist").not().isEmpty(),
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });
      next();
    },
  ];

  exports.validateReservationOwner = async (req, res, next) => {
    const userId = req.user.id;
    const reservationId = req.params.id;

    const reservation = await Reservation.findById(reservationId);

    const isReservationOwner = reservation.agency.toString() === userId;

    if (!isReservationOwner){
        res.status(400);
        throw new Error("This reservation does not belong to relevant client!");
    };

    next();
}