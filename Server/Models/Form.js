const mongoose = require('mongoose');

const formSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    predictedAnswer: String,
    shoeSize: Number
}, {
    timestamps: true
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;