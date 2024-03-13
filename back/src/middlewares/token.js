const Auth = require('../config/Auth');

const setAuthorizationHeader = (req, res, next) =>{
    const token = req.query.token;
    req.headers.authorization = "Bearer " + token;
    next();
}

module.export = setAuthorizationHeader;

