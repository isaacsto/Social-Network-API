const router = require('express').Router();
const userRoutes = require('./users');
//import thoughtroutes

router.use('/users', userRoutes);

module.exports = router; 