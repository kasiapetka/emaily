const mongoose = require('mongoose');
const {Schema} = mongoose;
const RecipientSchema = require('./Recipient');

const surveySchema = new Schema({
    type: String,
    limit: Number,
    title: String,
    subject: String,
    body: String,
    recipients: [RecipientSchema],
    yes: {type: Number, default: 0},
    no: {type: Number, default: 0},
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    dateSend: Date,
    lastResponded: Date
});

mongoose.model('surveys', surveySchema);