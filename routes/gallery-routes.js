const express = require('express');
const { checkFolder } = require('../controller/galleryController');
const { csr2018_gallery } = require('../controller/galleryController');
const { csr2021_gallery } = require('../controller/galleryController');
const { awards2020_gallery } = require('../controller/galleryController');
const { awards2021_gallery } = require('../controller/galleryController');
const { gatherings2015_gallery } = require('../controller/galleryController');
const { gatherings2016_gallery } = require('../controller/galleryController');
const { gatherings2017_gallery } = require('../controller/galleryController');
const { gatherings2020_gallery } = require('../controller/galleryController');
const { gatherings2021_gallery } = require('../controller/galleryController');
const { projects2020_gallery } = require('../controller/galleryController');
const { projects2021_gallery } = require('../controller/galleryController');

const router = express.Router();

router.post('/checkFolder', checkFolder);
router.post('/csr2018_gal', csr2018_gallery);
router.post('/csr2021_gal', csr2021_gallery);
router.post('/awards2020_gal', awards2020_gallery);
router.post('/awards2021_gal', awards2021_gallery);
router.post('/gatherings2015_gal', gatherings2015_gallery);
router.post('/gatherings2016_gal', gatherings2016_gallery);
router.post('/gatherings2017_gal', gatherings2017_gallery);
router.post('/gatherings2020_gal', gatherings2020_gallery);
router.post('/gatherings2021_gal', gatherings2021_gallery);
router.post('/projects2020_gal', projects2020_gallery);
router.post('/projects2021_gal', projects2021_gallery);

module.exports = {router: router}