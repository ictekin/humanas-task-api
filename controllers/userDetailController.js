const UserDetail = require("../models/UserDetail");
const User = require("../models/User");

module.exports.add_user = async (req, res) => {
  const {
    _id,
    name,
    surname,
    title,
    skills,
    metaCVComletionRate,
    profilePhoto,
    charts,
    motivations,
  } = req.body;

  try {
    const userDetail = await UserDetail.create({
      _id,
      name,
      surname,
      title,
      skills,
      metaCVComletionRate,
      profilePhoto,
      charts,
      motivations,
    });
    res.status(201).json({ userDetail });
  } catch (err) {
    throw Error("User not found");
  }
};

module.exports.get_user = async (req, res) => {
  const { _id } = req.body;

  try {
    const userDetail = await UserDetail.findOne({ _id });
    console.log(userDetail);
    res.status(201).json({ userDetail });
  } catch (err) {
    throw Error("User not found");
  }
};
