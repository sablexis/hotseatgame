const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

app.use(cors());

app.use('login', (req, res) => {
    res.send({
        token: 'testaaa111'
    })
})

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));