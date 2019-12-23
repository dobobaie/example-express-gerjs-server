module.exports = () => (req, res, next) => {
  req.public_ip = req.get("x-forwarded-for");
  next();
};
