const express = require('express');
const { connectToMongoDB } = require('./connect')
const urlRoute = require('./routes/url');


const app = express();
const PORT = 8001;


connectToMongoDB('mongodb://127.0.0.1:27017/short_url')
.then(()=>console.log('MongoDB connected'));
app.use(express.json());
app.use('/',urlRoute);


app.listen(PORT, () => console.log(`Server Started At PORT_NO ${PORT}`));