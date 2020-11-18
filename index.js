const express = require('express')
const app = express();
const functionsMap = require('./function');


app.post('/', express.json(), (req, res)=> {
    let intentName = req.body.queryResult.intent.displayName
    let response = functionsMap[intentName](req)
    res.send(response._response)
})

let port = process.env.PORT || 3000
app.listen(port, ()=> {
    console.log('Server is live at port '+ port)
})
