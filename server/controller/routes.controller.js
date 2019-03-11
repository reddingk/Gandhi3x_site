var express = require('express');
var router = express.Router();
var data = require('../services/data.service');

/* get albums */
function getAlbums(req, res){ data.getAlbums(req, res); }

/* get songs */
function getSongs(req, res){ data.getSongs(req, res); }

/* get mixtapes */
function getMixtapes(req, res){ data.getMixtapes(req, res); }

/* get videos */
function getVideos(req, res){ data.getVideos(req, res); }

/* get events */
function getEvents(req, res){ data.getEvents(req, res); }

/* get latest */
function getLatest(req, res){ data.getLatest(req, res); }

/* Routes */
router.get('/getAlbums', getAlbums);
router.get('/getSongs', getSongs);
router.get('/getMixtapes', getMixtapes);
router.get('/getVideos', getVideos);
router.get('/getEvents', getEvents);
router.get('/getLatest', getLatest);

module.exports = router;