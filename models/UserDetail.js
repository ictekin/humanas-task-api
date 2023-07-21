const mongoose = require("mongoose");

const UserDetailSchema = new mongoose.Schema({
  _id: {
    type: mongoose.ObjectId,
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
  skills: {
    type: [String],
    require: false,
  },
  metaCVComletionRate: {
    type: Number,
    require: false,
  },
  profilePhoto: {
    type: String,
    require: false,
  },
  charts: {
    type: [
      {
        id: {
          type: String,
          require: true,
        },
        title: {
          type: String,
          require: true,
        },
        rate: {
          type: Number,
          require: true,
        },
        bgColor: {
          type: String,
          require: true,
        },
        innerBgColor: {
          type: String,
          require: true,
        },
      },
    ],
    require: false,
  },
  motivations: {
    type: [
      {
        name: {
          type: String,
          require: true,
        },
        rate: {
          type: Number,
          require: true,
        },
        description: {
          type: String,
          require: true,
        },
      },
    ],
  },
});

const UserDetail = mongoose.model("userDetail", UserDetailSchema);

module.exports = UserDetail;
