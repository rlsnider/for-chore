const jwt = require('jsonwebtoken');
const jwtSecret= process.env.JWT_SECRET;

module.exports = (req, res) => {
    console.log(req.body);
    if(req.body.password === process.env.PASSWORD) {
        const token = jwt.sign({ 
            userId: 1,
        }, process.env.JWT_SECRET);

        res.json({
            token,
        });
    } else {
        res.status(401).send('Wrong Password');
    }
    res.send('Hello World');
};