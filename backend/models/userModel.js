const mongoose = require("mongoose");

const userScheme = new mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    birthdate: {
      type: Date,
      min: "1900-01-01",
      max: Date.now,
    },
    role: {
      type: String,
      lowercase: true,
      enum: ["user", "admin"],
      default: "user",
    },
  },
  { timestamps: true }
);

module.exports = User = mongoose.model("User2", userScheme);
