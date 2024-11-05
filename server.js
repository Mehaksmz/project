const express = require("express");

const app=express();

const dbConfig= require('./db');
const schoolRoute = require('./routes/schoolRoute');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Server is running');
});

app.use('/api/schools', schoolRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('node server started'));