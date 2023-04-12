const express = require('express');

let router = express.Router();
const controller = require('./controller/controller')

router.get('/data', (req, res) => {
    controller.microApi(req, res);
})

module.exports = router;