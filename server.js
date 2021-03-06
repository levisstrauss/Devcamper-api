const express = require('express');
const dotenv = require('dotenv');

// Load the env file
dotenv.config({ path: './config/config.env'});

const app = express();

const PORT = process.env.PORT || 3000;


app.listen(PORT, console.log(`server listening in ${process.env.NODE_ENV} mode on port ${PORT}`));
