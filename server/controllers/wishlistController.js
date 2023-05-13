const Wishlist = require('../model/wishlistModel');

const addToWishlist = async (req, res) => {
  const eyeglassesId = req.body.eyeglassesId;
  const userId = req.user.id;

  const wishlistItem = new Wishlist({
    eyeglasses: eyeglassesId,
    user: userId,
  });

  wishlistItem.save((err) => {
    if (err) {
      console.log(err);
      res
        .status(500)
        .send({ error: 'Error adding item to wishlist.' });
    } else {
      res.status(200).send({ message: 'Item added to wishlist.' });
    }
  });
};

const deleteWishlist = async (req, res) => {
  const eyeglasses = req.params.id;
  const user = req.user.id;
  await Wishlist.deleteOne({ eyeglasses: eyeglasses, user: user })
    .then(() => {
      res.sendStatus(204);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const getUserWishlist = async (req, res) => {
  const user = req.user.id;
  await Wishlist.find({ user: user })
    .populate('eyeglasses')
    .exec((err, wishlist) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Internal Server Error');
      }
      res.status(200).json({
        status: 'success',
        result: wishlist.length,
        data: {
          wishlist,
        },
      });
    });
};

module.exports = {
  addToWishlist,
  deleteWishlist,
  getUserWishlist,
};
