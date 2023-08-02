// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// const app = express();

// app.use(cors());
// app.use(bodyParser.json());

// mongoose.connect('mongodb+srv://your-mongodb-connection-string', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB Connected...'))
//     .catch((err) => console.log(err));

// const formSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     phoneNumber: String,
//     predictedAnswer: String,
//     shoeSize: Number
// }, {
//     timestamps: true
// });

// const Form = mongoose.model('Form', formSchema);

// app.post('/api/form', async (req, res) => {
//     const newForm = new Form(req.body);
//     const savedForm = await newForm.save();

//     res.json(savedForm);
// });

// app.get('/api/form', async (req, res) => {
//     const forms = await Form.find();
//     res.json(forms);
// });

// const port = process.env.PORT || 5000;

// app.listen(port, () => console.log(`Server started on port ${port}`));









































const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
// const formRoutes = require('.formRoutes');


require('dotenv').config();


const formRoutes = require('./routes/formRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// mongoose.connect('mongodb+srv://your-mongodb-connection-string', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB Connected...'))
//     .catch((err) => console.log(err));


mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

app.use('/api/form', formRoutes);

const port = process.env.PORT || 5002;

app.listen(port, () => console.log(`Server started on port ${port}`));