const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config({path: './config/config.env'});

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
    });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
    }
);