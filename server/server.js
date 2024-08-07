// server.js
require('dotenv').config();
const express = require('express');
const connectDb = require('./utils/db');
const app = express();
const cors = require('cors');
const authRoute = require('./router/auth-router');
const contactRoute = require('./router/contact-user');
const syllabusRoute = require('./router/syllabus-router');
const errorMiddleware = require('./middlewares/error-middleware');
const path = require('path');
const Port = process.env.PORT || 3000;

const corsOptions = {
    origin: ['http://localhost:5173', 'https://ptustudyzone.vercel.app'],
    methods: 'GET, POST, PUT, DELETE, PATCH, HEAD',
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/form', contactRoute);
app.use('/api/data', syllabusRoute);

app.get('/', (req, res) => {
    res.send('Hello Ptu');
});

app.use(errorMiddleware);

app.use((req, res, next) => {
  console.log(`404 Error - Path: ${req.path}`);
  res.status(404).json({ msg: 'Not Found' });
});

connectDb().then(() => {
    app.listen(Port, () => {
        console.log(`Server is running at port: ${Port}`);
    });
}).catch(err => {
    console.error('Failed to connect to the database', err);
});
