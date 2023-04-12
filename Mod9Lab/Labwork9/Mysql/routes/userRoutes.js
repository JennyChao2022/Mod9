const express = require("express");
const router = express.Router();
const Controllers = require("../controller/userController.js");

router.get('/', (req, res) => {
Controllers.getText(res); })

router.post('/create', (req, res) => {
    
    Controllers.createText(req, res) 
})

module.exports = router;