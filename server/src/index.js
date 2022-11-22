const express = require('express');

const app = express();


//Read / Get route
app.get('/todos', (req, res) => {
    res.send('Read/Get request!');
});

app.listen(3030);