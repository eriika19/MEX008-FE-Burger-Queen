const express = require('express');
const router = express.Router();

const React = require('react');


const Home = require('../../src/pages/Home');
//import Home from '../../src/pages/Home';


// @route   GET page/Home
// @desc    Test route
// @access  Public
router.get('/',(req, res) => res.send(Home));

module.exports = router;