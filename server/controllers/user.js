const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const ObjectId = require("mongoose").Types.ObjectId;
const generator = require('generate-password');
const { sendEmail } = require('../utils/awsSendEmail');


// @route POST /users
// @desc Search for users
// @access Private
exports.searchUsers = asyncHandler(async (req, res, next) => {
  const searchString = req.query.search;

  let users;
  if (searchString) {
    users = await User.find({
      username: { $regex: searchString, $options: "i" }
    });
  }

  if (!users) {
    res.status(404);
    throw new Error("No users found in search");
  }

  res.status(200).json({ users: users });
});

// @route GET /users/
// @desc Get clients for an
// @access Private
exports.getClients = asyncHandler(async (req, res, next) => {
    const clients = await User.find({ agencyId: req.user.id });
    if (clients) {
      res.status(200).json({
        success: {
          clients
        }
      })
    } else {
      res.status(500);
      throw new Error("Internal Server Error");
    }
});

// @route PATCH /users/:id
// @desc Update user
// @access Private
exports.updateUser = asyncHandler(async (req, res, next) => {
  const toUpdate = {
    email,
    firstName,
    lastName,
    businessType,
    address,
    propertyName,
    IstAirportMaxFourPaxCost,
    IstAirportMaxSixPaxCost,
    IstAirportMaxTenPaxCost,
    SawAirportMaxFourPaxCost,
    SawAirportMaxSixPaxCost,
    SawAirportMaxTenPaxCost
  } = req.body;

  const clientId = req.params.id;
  const client = await User.findByIdAndUpdate(clientId, toUpdate, { new: true });
  if (client) {
    res.status(201).json({
      success: {
        client
      }
    });
  } else {
    res.status(500);
    throw new Error("Internal Server Error");
  }
});

// @route POST /users/
// @desc Post a user
// @access Private
exports.postClient= asyncHandler(async (req, res, next) => {
  const newClient = {
    email,
    firstName,
    lastName,
    businessType,
    address,
    propertyName,
    IstAirportMaxFourPaxCost,
    IstAirportMaxSixPaxCost,
    IstAirportMaxTenPaxCost,
    SawAirportMaxFourPaxCost,
    SawAirportMaxSixPaxCost,
    SawAirportMaxTenPaxCost
  } = req.body;

  const password = generator.generate({
    length: 8,
    numbers: true
  });
  const lastThreeRarndomDigits = generator.generate({
    length: 3,
    numbers: false
  });

  const username = `${newClient.firstName}${newClient.propertyName.slice(0, 2)}${lastThreeRarndomDigits}`;

  newClient.username = username;
  newClient.password = password;
 
  const client = await User.create({
    agencyId: ObjectId(req.user.id),
    ...newClient
  });

  const agency = await User.findById(req.user.id);
  agency.clientId = agency.clientId.concat(client._id);

  if (client) {
    await agency.save();
    sendEmail(email, firstName, username, password, agency.propertyName);
    res.status(201).json({
      success: {
        client
      }
    });
  } else {
    res.status(500);
    throw new Error("Internal Server Error");
  }
});

exports.deleteClient = asyncHandler(async (req, res, next) => {
  const userId = req.params.id;
  const user = await User.findByIdAndDelete(userId);

  if (user) {
    res.status(200).json({
      success: {
        user
      }
    })
  } else {
    res.status(500);
    throw new Error('Sever Error');
  }
});

