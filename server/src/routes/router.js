const express = require('express');
const router = express.Router();

//Read / Get route
router.get('/todos', (req, res) => {
    res.send('Read/Get request!');
});

//Add a new todo /Post route

router.post('/todos', (req, res) => {
    res.send('post route');
});

module.exports = router;

