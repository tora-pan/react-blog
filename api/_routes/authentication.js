const router = require("express").Router();
const User = require("../_models/User");
const bcrypt = require("bcrypt");

//Register
router.post("/register", async (req, res) => {
  try {
    //salt the pass
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPass,
    });
    const user = await newUser.save();
    //if all is good
    res.status(200).json("User has been created successfully");
  } catch (err) {
    res.status(500).json(err);
    console.log();
  }
});
//Login

module.exports = router;
