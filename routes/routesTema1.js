const express = require('express');
const path = require('path');

const routesTema1 = express.Router();

routesTema1.get('/1', (req, res) => {
    res.sendFile(path.join(__dirname, '../views', '1-1.html'));
});

module.exports = routesTema1;
