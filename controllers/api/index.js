// imports express libary package and sets router as a mini app
const router = require('express').Router();
// imports the route files
const userRoutes = require('./userRoutes');
// imports the route files
const postRoutes = require('./postRoutes');

// sets pathway for each route
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;