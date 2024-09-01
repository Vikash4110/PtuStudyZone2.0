const hodMiddleware = async (req, res, next) => {
    try {
      console.log('User from hodMiddleware:', req.user); // Log the user object to verify it
      const hodRole = req.user.isHod;
      if(!hodRole) {
        return res.status(403).json({ message : "Access Denied. user is not an Hod." });
      }

      next();
    } catch (error) {
      next(error);
    }
  };
  
  module.exports = hodMiddleware;