const express = require('express')

const app = express()

const port = process.env.port || 3001

app.listen(port, (req, res) => {
    console.log(`Server has been started on ${port}`)
})

app.get('/login', (req, res) => {
    res.json({
        message: "Hello from server side!"
    })
})