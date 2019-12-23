const Chance = require("chance");

module.exports = () => (req, res, next) => {
  const c = new Chance();
  res.setHeader("X-Request-Id", c.guid());
  next();
};
