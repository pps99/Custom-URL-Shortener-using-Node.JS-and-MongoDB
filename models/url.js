const moongose = require('mongoose');

const urlSchema = new moongose.Schema({  
  shortId: {
    type: String,
    required: true,
    unique: true,
  },
  redirectURL: {
    type: String,
    required: true,
  },
  visitHistory: [
    {
      timestamp: {type: Number},
    }
  ],
},{timestamps: true});

const URL = moongose.model('url',urlSchema);

module.exports = URL;
