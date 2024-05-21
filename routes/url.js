const express = require('express');
const { handleGenerateNewShortURL, handleRedirectToOriginalURL, handleGetAnalytics } = require('../controllers/url')

const router = express.Router();

router
			.route('/url')
			.post(handleGenerateNewShortURL);

router 
			.route('/:shortId')
			.get(handleRedirectToOriginalURL);

router
			.route('/analytics/:shortId')
			.get(handleGetAnalytics);


module.exports = router;
