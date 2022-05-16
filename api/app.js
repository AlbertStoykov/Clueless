const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const usersRoutes = require('./routes/users');

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send('Welcome to Clueless!'));

module.exports = app;
