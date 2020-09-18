const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const Survey = mongoose.model('surveys');
const bodyParser = require('body-parser');

// create application/json parser
const jsonParser = bodyParser.json();

module.exports = app => {
    app.post('/api/surveys', requireLogin, jsonParser, async (req, res) => {
        const {password, limit, title, subject, body, questions} = req.body;
        const survey = new Survey({
            //  password,
            limit: parseInt(limit, 10),
            title,
            subject,
            body,
            questions: questions.map(({question, answers, id}) => ({
                question: question.trim(),
                answers: answers,
                id: id
            })),
            _user: req.user.id,
            dateSend: Date.now()
        });

        const buff = Buffer.from(survey._id.toString(), 'utf-8');
        survey.URL = buff.toString('base64');

        try {
            await survey.save();
            res.status(200).send(survey.URL);
        } catch (err) {
            res.status(422).send(err);
        }
    });

    app.get('/api/surveys/:surveyId', requireLogin, jsonParser, async (req, res) => {
        const buff = Buffer.from(req.params.surveyId, 'base64');
        const id = buff.toString('utf-8');

        res.status(200).send(id);

    });
};


//recipients.split(',').map(email => ({email: email.trim()})),
