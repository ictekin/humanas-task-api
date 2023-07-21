const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader != "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    jwt.verify(token, "humanas-task-api", (err, decodedToken) => {
      if (err) {
        console.log(err);
        throw Error("Token issue");
      } else {
        next();
      }
    });
  } else {
    res.sendStatus(403);
  }
};

module.exports = { requireAuth };
