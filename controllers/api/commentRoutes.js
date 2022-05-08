const router = require('express').Router();
const { Comment } = require('../../models/');
const auth = require('../../utils/auth');

router.post('/', auth, async (req, res) => {
  try {
    const comment = await Comment.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.json(comment);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
