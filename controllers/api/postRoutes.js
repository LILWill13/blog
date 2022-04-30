const router = require('express').Router();
// imports post table
const { Post } = require('../../models');
// function imported from the utils folder
const auth = require('../../utils/auth');

router.post('/', auth, async (req, res) => {
  try {
    // creates new post and connects it to the user id
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    //   deletes specified post
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    // if specified post does not exist, then the user is notified
    if (!postData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
