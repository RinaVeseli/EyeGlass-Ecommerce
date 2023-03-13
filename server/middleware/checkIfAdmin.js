const admin = require('../services/firebase');

const checkIfAdmin = async (req, res, next) => {
  const { authToken } = req;
  try {
    const user = await admin.auth().verifyIdToken(authToken);
    if (user.admin) {
      const userId = userInfo.uid;
      req.user = { id: userId };
      req.authId = user.uid;
    } else {
      return res.status(403).json({ message: 'Not an admin' });
    }
  } catch (err) {
    return res
      .status(401)
      .json({ message: 'Cannot verify right now' });
  }

  next();
};

module.exports = checkIfAdmin;
