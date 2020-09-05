const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Survey = mongoose.model('surveys');

module.exports = app => {
    app.post('/api/surveys', requireLogin,(req, res) =>{

        console.log(req.body)
        const {type, limit,title, subject, body, recipients} = req.body;

        const survey = new Survey({
            type,
            limit,
            title,
            subject,
            body,
            recipients: recipients.split(',').map(email => ({email: email.trim()})),
            _user: req.user.id,
            dateSend: Date.now()
        });

        res.send(survey);
    });
};
