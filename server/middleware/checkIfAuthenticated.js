const admin = require("../services/firebase");

const checkIfAuthenticated = async (req, res, next) => {
  try {
    const {authToken} = req;
    const userInfo = await admin.auth().verifyIdToken(authToken);
    const userId = userInfo.uid;
    req.user = {id: userId};
    req.authId = userInfo.uid;
    next();
  } catch (error) {
    return res.status(401).json({
      error,
    });
  }
};

module.exports = checkIfAuthenticated;