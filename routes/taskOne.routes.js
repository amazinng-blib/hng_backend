const express = require('express');
const taskOneController = require('../controllers/taskone.controllers');
const taskOneRoute = express.Router();

taskOneRoute.get('/', taskOneController);

module.exports = taskOneRoute;
