const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const morgan = require('morgan');

// Route Files
const diarys = require('./routes/diarys');

// Load environment variables
dotenv.config({path: './config/config.env'});

const app = express();

//Example of middleware
// const welcome = (req, res, next) => {
//     req.welcome = 'Welcome to Diary API';
//     console.log('Welcome to Diary API');
//     next();
//     }   


// Mount routers

// app.use(welcome);
// app.use(logger);

// Dev logging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}

app.use('/api/v1/diarys', diarys);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    }
);


