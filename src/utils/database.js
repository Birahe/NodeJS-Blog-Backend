const mongoose = require("mongoose");

const UserSchema = mongoose.model(
  "users",
  new mongoose.Schema({
    username: {
      required: true,
      type: String,
      unique: true,
    },
    password: {
      required: true,
      type: String,
    },
    createdAt: {
      required: false,
      type: Date,
      default: null,
    },
    updatedAt: {
      required: false,
      type: Date,
      default: null,
    },
  })
);

function init() {
  return new Promise((resolve, reject) => {
    mongoose.connect(process.env.MONGO_URI, (err) => {
      if (err) {
        reject(err);
      } else {
        console.log("Connected to database");
        resolve();
      }
    });
  });
}

module.exports = {
  init,
  UserSchema,
};
