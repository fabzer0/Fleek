require("dotenv").config();

export const APP_SECRET = process.env.APP_SECRET;

export const appendToken = (req, res, next) => {
  const {
    headers: { authorization }
  } = req;
  if (typeof authorization !== "undefined") {
    const bearerToken = authorization.split(" ");
    const token = bearerToken[1];
    req.token = token;
    return next();
  }
  return res.status(403).json({
    message: "You are not authorized"
  });
};
