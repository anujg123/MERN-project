const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.post("/register", async (req, res) => {
  console.log(req.body);

  
const { firstname, lastname, email, password, repassword } = req.body;

  try {
    const user = await User.findOne({ email });  
    if (user) {
      res.send({ message: "This email is already Registered" });
    } else {
      const user = new User({
        firstname,
        lastname,
        email,
        password,
        repassword,
      });
      await user.save();  
      res.send({ message: "Successfull Register" });
    }
  } catch (err) {
    console.error(err);  
    res.status(500).send("Error registering user");
  }
});

router.post("/login", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    if (password == user.password) {
      res.send({ message: "Login Successful", user});
    } else {
      res.send({ message: "Password didn't match" });
    }
  } else {
    res.send({ message: "This id is not registered" });
  }
});



module.exports = router;