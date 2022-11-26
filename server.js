const express = require('express')
require('dotenv').config()

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())

app.get('/', (_, res) => {
    res.send('coucou')
})

app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur le port ${PORT}`)
})