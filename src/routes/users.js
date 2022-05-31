const express = require("express");
const { UserSchema } = require("../utils/database");
const router = express.Router();

router.get("/", (req, res) => {
  UserSchema.find({}, (err, users) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(users);
    }
  });
});

router.post("/", (req, res) => {
  const user = new UserSchema({
    username: req.body.username,
    password: req.body.password,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  user.save((err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send({
        message: "User created successfully.",
        user: user,
      });
    }
  });
});

router.get("/:username", (req, res) => {
  const { username } = req.params;
  UserSchema.findOne({ username }, (err, user) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(user);
    }
  });
});

router.patch("/:_id", (req, res) => {
  const { _id } = req.params;
  UserSchema.findByIdAndUpdate(
    { _id },
    {
      username: req.body.username,
      password: req.body.password,
      updatedAt: new Date(),
    },
    { new: true },
    (err, user) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(user);
      }
    }
  );
});

module.exports = router;
