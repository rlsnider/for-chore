
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader) {
        res.status(401).send('You must log in!');
    } else {
        const token = authHeader.split(' ')[1];
        console.log(token);
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                res.status(403).send('invalid password');
            } else {
                next();
            }
        });
    }
}