const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');

module.exports = async (req, res, next) => {
    const buff = Buffer.from(req.params.surveyId, 'base64');
    const id = buff.toString('utf-8');
    const {password} = await Survey.findOne({_id: id});

    if(password){
        return res.status(401).send({error: 'You must provide password to fill the survey'})
    }
    next();
};

// if(password) {
//     const token = req.header('token');
//     if (!token) return res.status(401).send({error: 'You must provide password to fill the survey'});
//     try {
//         const verified = jwt.verify(token, keys.tokenSecret);
//         req.auth = verified;
//         next();
//     } catch (err) {
//         res.status(400).send('Invalid token');
//     }
// }
// next();
