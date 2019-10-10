const express = require('express');
const router = express.Router();

const React = require('react');


const Menu = require('../../src/pages/Menu');
//import Menu from '../../src/pages/Menu';


// @route   GET page/Menu
// @desc    Test route
// @access  Public
router.get('/',(req, res) => res.send(Menu));

module.exports = router;