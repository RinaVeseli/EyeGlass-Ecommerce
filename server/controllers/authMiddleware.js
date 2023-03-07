exports.isAdmin = (req, res, next) => {
  const { uid } = req.user;

  admin
    .auth()
    .getUser(uid)
    .then((userRecord) => {
      const { customClaims } = userRecord;

      if (customClaims && customClaims.admin === true) {
        return next();
      }

      throw new Error();
    })
    .catch((error) => {
      res.status(403).json({ message: 'Access denied' });
    });
};
