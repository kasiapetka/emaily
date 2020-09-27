const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireSurveyPassword = require('../middlewares/requireSurveyPassword');
const Survey = mongoose.model('surveys');
const bodyParser = require('body-parser');

// create application/json parser
const jsonParser = bodyParser.json();

module.exports = app => {
    app.post('/api/surveys', requireLogin, jsonParser, async (req, res) => {
        const {password, limit, title, subject, body, questions} = req.body;
        let pass;
        if(password === "true")
        pass = Math.random().toString(36).slice(-10);

        const survey = new Survey({
            password: pass,
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

    app.get('/api/surveys/:surveyId',requireSurveyPassword, jsonParser, async (req, res) => {
        const buff = Buffer.from(req.params.surveyId, 'base64');
        const id = buff.toString('utf-8');
        try {
            const {password, limit, title, subject, body, questions,dateSend} = await Survey.findOne({_id: id});
            const survey = {
                //  password,
                limit,
                title,
                subject,
                body,
                questions,
                dateSend
            };

            res.status(200).send(survey);
        } catch (err) {
            res.status(404).send(err);
        }
    });

    app.post('/api/surveys/reply/:surveyId',requireSurveyPassword, jsonParser, async (req, res) => {
        const replies = req.body;
        const buff = Buffer.from(req.params.surveyId, 'base64');
        const id = buff.toString('utf-8');
        try {
            await Survey.update({_id: id},{$push:{replies:replies}});
            res.status(200).send('oki');
        } catch (err) {
            res.status(422).send(err);
        }
    });

};

//recipients.split(',').map(email => ({email: email.trim()})),
