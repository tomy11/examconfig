const express = require('express');
const line = require('@line/bot-sdk');
const config = require('../configs/config');
const Router = express.Router();

Router.post('/webhook', line.middleware(config), (req, res) => {

    Promise

        .all(req.body.events.map(handleEvent))

        .then((result) => res.json(result));

        const client = new line.Client(config);

        function handleEvent(event) {

            if (event.type !== 'message' || event.message.type !== 'text') {

                return Promise.resolve(null);

            }

            return client.replyMessage(event.replyToken, {

                type: 'text',

                text: event.message.text

            });

        }

});

module.exports = Router;