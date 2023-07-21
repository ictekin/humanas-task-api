const MetaCv = require("../models/MetaCv");

module.exports.add_user = async (req, res) => {
  const {
    id,
    name,
    surname,
    title,
    developerType,
    metaCVCompletionRate,
    profilePhoto,
    location,
    workingPreferences,
    workingStatus,
    languages,
    isEmployed,
    charts,
    skills,
  } = req.body;

  try {
    const metaCv = await MetaCv.create({
      id,
      name,
      surname,
      title,
      developerType,
      metaCVCompletionRate,
      profilePhoto,
      location,
      workingPreferences,
      workingStatus,
      languages,
      isEmployed,
      charts,
      skills,
    });
    res.status(201).json({ metaCv });
  } catch (err) {
    throw Error("Meta Cv not found");
  }
};

module.exports.get_users = async (req, res) => {
  const { limit = 0, skip = 0 } = req.body;

  const sort = { length: -1 };

  try {
    const metaCv = await MetaCv.find({}).sort(sort).limit(limit).skip(skip);
    res.status(201).json({ metaCv });
  } catch (err) {
    throw Error("Meta Cv not found");
  }
};
