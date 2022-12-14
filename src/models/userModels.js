const mongoose = require("mongoose");

//*****************************[User Model Creation]******************************//
const userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
      trim: true,
    },

    lname: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
    },

    profileImage: {
      type: String,
      required: true,
      trim: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
    },

    address: {
      shipping: {
        street: { type: String, required: true, trim: true },
        city: { type: String, required: true, trim: true },
        pincode: { type: Number, required: true, trim: true },
      },

      billing: {
        street: { type: String, required: true, trim: true },
        city: { type: String, required: true, trim: true },
        pincode: { type: Number, required: true, trim: true },
      },
    },
  },
  { timestamps: true }
);

//*********************[πConnection Creation & export modelπ]******************//
module.exports = mongoose.model("User", userSchema);

//ππππππππ[Thank You User-Schema End]πππππππππ//
