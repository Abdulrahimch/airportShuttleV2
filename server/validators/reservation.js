const Reservation = require('../models/reservation');
const { check, validationResult } = require("express-validator");

exports.validateCreateUpdateReservation = [
  check("from", "Please enter the source").not().isEmpty(),
  check("to", "Please enter the destination").not().isEmpty(),
  check("pax", "Please enter the number of the passengers").not().isEmpty(),
  check("passengers", "Please enter the name of the passengers").not().isEmpty(),
  check("property", "Please enter the property name").not().isEmpty(),
  check("flightNo", "Please enter the flight number").not().isEmpty(),
  check("selectedDate", "Please enter the date of arrival").not().isEmpty(),
  check(
    "driverNote",
    "Please enter a driver note with 1024 or less characters"
  )
    .isLength({
      max: 1024,
    })
    .optional({ nullable: true }),
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

    const isReservationOwner = reservation.client.toString() === userId;

    if (!isReservationOwner){
        res.status(400);
        throw new Error("This reservation does not belong to relevant client!");
    };

    next();
}
