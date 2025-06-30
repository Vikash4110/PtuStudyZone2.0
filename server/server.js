require('dotenv').config();
const express = require('express');
const connectDb = require('./utils/db');
const cors = require('cors');
const errorMiddleware = require('./middlewares/error-middleware');

const authRoute = require('./router/auth-router');
const contactRoute = require('./router/contact-user');
const syllabusRoute = require('./router/syllabus-router');
const adminRoute = require('./router/admin-router');
const pyqRoute = require("./router/pyq-router");
const notesRoute = require('./router/notes-router');
const youtubeRoute = require('./router/youtube-router');
const blogRouter = require("./router/blog-router");
const bookRoute = require('./router/book-router');
const hodRouter = require('./router/hod-router');
const complaintRoute = require('./router/complaint-router');
const MaterialRoute = require('./router/material-router');

const path = require('path')

const Port = process.env.PORT || 3000;
const app = express();

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
app.use('/api/data', pyqRoute);
app.use('/api/data', notesRoute);
app.use('/api/data', bookRoute);
app.use('/api/data', youtubeRoute);
app.use('/api/admin', adminRoute);
app.use('/api/blogs', blogRouter);
app.use('/api/hod', hodRouter);
app.use('/api/form', complaintRoute);

app.use('/api/data',MaterialRoute);

app.get('/', (req, res) => {
  res.send('Hello Ptu');
});

// Error handling middleware
app.use(errorMiddleware);

// 404 Error handler
app.use((req, res) => {
  console.log(`404 Error - Path: ${req.path}`);
  res.status(404).send('Page Not Found');
});

connectDb()
  .then(() => {
    app.listen(Port, () => {
      console.log(`Server is running on port ${Port}`);
    });
  })
  .catch((error) => {
    console.error('Failed to connect to database:', error);
  });