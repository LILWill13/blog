// imports express libary package and sets router as a mini app
const router = require('express').Router();

// creates url pathways
const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

// adds created pathways to the app
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;