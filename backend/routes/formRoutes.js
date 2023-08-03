const express = require('express');
// const Form = require('./Form');



const Form = require('../Models/Form'); // replace with your Revenue model



const router = express.Router();

router.post('/', async (req, res) => {
    const newForm = new Form(req.body);
    const savedForm = await newForm.save();

    res.json(savedForm);
});

router.get('/', async (req, res) => {
    const forms = await Form.find();
    res.json(forms);
});

module.exports = router;