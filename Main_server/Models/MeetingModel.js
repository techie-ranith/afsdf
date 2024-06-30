const mongoose = require('mongoose');

const meetingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    date: {
        type: Date,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    agenda: {
        type: String,
        required: true
    },
    attendees: {
        type: [String],
        required: true
    },
    minutes: String,
    notes: String
});

const Meeting = mongoose.model('Meeitng', meetingSchema);

module.exports = Meeting;