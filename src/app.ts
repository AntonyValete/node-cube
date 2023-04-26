import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

const app = express();

const __dirname = path.resolve();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static(__dirname + '/public'));

dotenv.config();

const _port = process.env.PORT || 3000;

console.log(_port);

app.listen(_port, () => {
    console.log(`Listening app on port ${_port}`);
});