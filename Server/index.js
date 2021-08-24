const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan')
const path = require('path');
const { default: axios } = require('axios');
app.use(morgan('dev'));

const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
app.use(express.static(PUBLIC_DIR))


app.get('/sleepData/:userId', (req, res) => {
  console.log('the user', req.params)
    const getSleepData = () => {
        axios.get(`https://s3.amazonaws.com/eight-public/challenge/${req.params.userId}.json`)
        .then((response) => {
          res.send(response.data.intervals)
        })
        .catch((err) => {
          console.error(err);
        })

    }
    getSleepData();

})

app.listen(port, () => console.log(`App listening on port ${port}!`))