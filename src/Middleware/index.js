import jwt from "jsonwebtoken";

export const middleware1 = (req, res, next) => {
  console.log("From Middleware1");
  next();
};
export const middleware2 = (req, res, next) => {
  console.log("From Middleware2");
  next();
};

export function createJWToken(req, res, next) {
  // const payload = req.body;
  // const { name = "", age = "" } = payload;
  const data = {
    name: "sri",
    age: 26
  }
  const token = jwt.sign(data, process.env.JWT_SECRET_KEY);
  console.log(token);
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  console.log(decoded);
}