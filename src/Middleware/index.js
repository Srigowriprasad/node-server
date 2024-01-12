
export const middleware1 = (req, res, next) => {
    console.log("From Middleware1");
    next();
  };
export const middleware2 = (req, res, next) => {
    console.log("From Middleware2");
    next();
  };