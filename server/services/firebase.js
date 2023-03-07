var admin = require('firebase-admin');

var serviceAccount = require('../credentials/eyeglasses-e-commerce-firebase-adminsdk-mchxi-961208d25e.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL:
    'https://eyeglasses-e-commerce-default-rtdb.firebaseio.com',
});
// const auth = admin.auth();
exports.auth = admin.auth();
module.exports = admin;
