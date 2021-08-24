const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan')
const path = require('path');
const { default: axios } = require('axios');
app.use(morgan('dev'));
// const aws = require('aws-sdk');
// const config = require('./config.json')


const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
app.use(express.static(PUBLIC_DIR))


app.get('/sleepData', (req, res) => {
    const getSleepData = () => {
        axios.get('https://s3.amazonaws.com/eight-public/challenge/d6c1355e38194139b8d0c870baf86365.json')
        .then((response) => {
          res.send(response.data)
        })
        .catch((err) => {
          console.error(err);
        })

    }
    getSleepData();

})

app.listen(port, () => console.log(`App listening on port ${port}!`))