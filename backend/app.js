
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { db } = require('./db/db');

const app = express();
const PORT = process.env.PORT ;


app.use(express.json());
app.use(cors({

}));

const server = () => {  
    db()
    app.listen(PORT, () => {
        console.log("Server is running on port" ,PORT);
    });
}

server();