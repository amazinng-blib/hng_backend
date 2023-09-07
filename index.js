const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();
app.use(cors('Access-Control-Allow-Origin', '*'));

// importing DB
const connectDB = require('./config/db');
connectDB();

// importing Routes
const taskOne = require('./routes/taskOne.routes');

app.use('/api', taskOne);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
