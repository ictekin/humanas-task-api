const mongoose = require("mongoose");

const MetaCvSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true,
  },
  name: {
    type: String,
    require: false,
  },
  surname: {
    type: String,
    require: false,
  },
  title: {
    type: String,
    require: false,
  },
  developerType: {
    type: String,
    require: false,
  },
  metaCVCompletionRate: {
    type: Number,
    require: false,
  },
  profilePhoto: {
    type: String,
    require: false,
  },
  location: {
    type: String,
    require: false,
  },
  workingPreferences: {
    type: String,
    require: false,
    lowercase: true,
  },
  workingStatus: {
    type: String,
    require: false,
    lowercase: true,
  },
  languages: {
    type: String,
    require: false,
  },
  isEmployed: {
    type: Boolean,
    require: false,
  },
  charts: {
    type: [
      {
        rate: {
          type: Number,
          require: true,
        },
        bgColor: {
          type: String,
          require: true,
        },
      },
    ],
    require: false,
  },
  skills: {
    type: [
      {
        name: {
          type: String,
          require: true,
        },
      },
    ],
  },
});

const MetaCv = mongoose.model("metaCv", MetaCvSchema);

module.exports = MetaCv;
