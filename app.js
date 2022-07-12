const express = require('express')
const app = express()

app.use( express.static('public') );

app.get('/generic', (req, res) => {
    res.sendFile(__dirname+'/public/generic.html')
})

app.get('/elements', (req, res) => {
    res.sendFile(__dirname+'/public/elements.html')
})

app.get('*',  (req, res) => {
    res.send('404 / NOT FOUND');
  })

app.listen(3000)