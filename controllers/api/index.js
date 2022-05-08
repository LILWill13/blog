// imports express libary package and sets router as a mini app
const router = require('express').Router();
// imports the user route 
const userRoutes = require('./userRoutes');
// imports the post route files
const postRoutes = require('./postRoutes');
// imports the comment route files
const commentRoutes = require('./commentRoutes');
// sets pathway for each route
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;