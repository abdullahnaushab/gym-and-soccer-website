// subscriber.js
const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
    name: String,
    email: String,
    message: String
});

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

module.exports = Subscriber;

