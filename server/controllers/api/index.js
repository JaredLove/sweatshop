const router = require('express').Router();

const userRoutes = require('./member-routes.js');

router.use('/members', userRoutes);

module.exports = router;