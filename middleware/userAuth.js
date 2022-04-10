const jwt = require('jsonwebtoken');
const users = require('../schema/users');
const { jwtConstants } = require('../common/constants');

const jwtAuth = async (req, res, next) => {

    const accessToken = req.get('Authorization');
    try {
        const userToken = jwt.verify(accessToken, jwtConstants.secretKey, { expiresIn: jwtConstants.exp_time });
        const userDetails = await users.findById(userToken._id)
        if (userDetails) {
            req.user = userDetails.toJSON();
        }
    } catch (err) {
        return res.status(401).json(err);
    }
    return next();
};

module.exports = { jwtAuth }