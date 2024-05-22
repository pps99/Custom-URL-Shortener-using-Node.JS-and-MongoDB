const express = require('express');
const { handleGenerateNewShortURL,
			  handleRedirectToOriginalURL,
			  handleGetAnalytics,
				handleGetAllURL } = require('../controllers/url');

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

router 
			.route('/url/test')
			.get(handleGetAllURL);


module.exports = router;
