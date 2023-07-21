const User = require("../models/User");
const jwt = require("jsonwebtoken");

const handleErrors = (err) => {
  const errors = { email: "", password: "" };
  console.log(err.message);

  if (err.message === "incorrect email") {
    errors.email = "that email is not registered";
  }

  if (err.message === "incorrect password") {
    errors.email = "that password is incorrect";
  }

  if (err.code === 11000) {
    errors.email = "that email is already registered";
    return errors;
  }

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "humanas-task-api", {
    expiresIn: maxAge,
  });
};

module.exports.signup_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });
    const token = createToken(user._id);
    res.status(201).json({ user: user._id, token: token });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.status(201).json({ user: user._id, token: token });
  } catch (err) {
    const errors = handleErrors(err);
    console.log(errors);
    res.status(400).json({ errors });
  }
};
