const express = require('express');
let router = express.Router();

router.get('/', async (req, res) => {
    return res.send([
        {id: 0, name: "Lenovo"},
        {id: 1, name: "Dell"},
        {id: 2, name: "Hp"},
        {id: 3, name: "Acer"},
        {id: 4, name: "Apple"}
    ]);
    
})

module.exports = router;