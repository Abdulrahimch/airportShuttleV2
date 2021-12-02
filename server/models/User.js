const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    unique: true
  },
  lastName: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  register_date: {
    type: Date,
    default: Date.now
  },
  role: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
    enum: ['client', 'agency']
  },
  businessType: {
    type: String,
    required: true,
    trim: true,
    enum: ['agency', 'hotel', 'restaurant', 'other']
  },
  debt: {
    type: Number,
    default: 0
  },
  property: {
    type: String,
    required: true
  },
  IstAirportMaxFourPaxCost: Number,
  IstAirportMaxSixPaxCost: Number,
  IstAirportMaxTenPaxCost: Number,
  SawAirportMaxFourPaxCost: Number,
  SawAirportMaxSixPaxCost: Number,
  SawAirportMaxTenPaxCost: Number,
  agencyId: { type: mongoose.Types.ObjectId },
  clientId: Array
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = User = mongoose.model("user", userSchema);
