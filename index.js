const express = require('express')
const app = express();
const dfff = require('dialogflow-fulfillment')
const {BotmockUtils} = require("@botmock/sdk"); // Or replace with path to botmock utils lib
const functionsMap = require('./function');

app.post('/', express.json(), (request, response)=> {
    const agent = new dfff.WebhookClient({
        request,
        response
    })

    let intentMap = new Map();

    intentMap = BotmockUtils.mapIntents(intentMap, functionsMap);

    agent.handleRequest(intentMap)
})
let port = process.env.PORT || 3000

app.listen(port, ()=> {
    console.log('Server is live at port '+ port)
})
