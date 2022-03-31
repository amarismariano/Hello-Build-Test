const checkAuth = (req, res, next) => {
  console.log("desde check auth");

  next();
};

export default checkAuth;
