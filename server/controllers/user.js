const User = require("../models/User");
const asyncHandler = require("express-async-handler");
const ObjectId = require("mongoose").Types.ObjectId;
const generator = require('generate-password');


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
    const updates = Object.keys(req.body);
    const allowedUpdates = ['username', 'email', 'password'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));
    if (!isValidOperation) return res.status(404).send({ error: 'Invalid update' });

    const user = await User.findById({ _id: req.params.id });
    if (!user) return res.status(404).send({ error: "User not found" });

    try{
        updates.forEach((update) => user[update] = req.body[update]);
        await user.save();
        res.send(user);
    } catch (e) {
        res.status(400).send(e);
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
  await agency.save();

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
