const express = require('express');
//const line = require('@line/bot-sdk');
//const config = require('./configs/config');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const index = require('./router/indexRouter');

app.use('/webhook', index);

app.listen(3000);