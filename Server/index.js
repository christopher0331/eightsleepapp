const express = require('express');
const app = express();
const port = 3020;
const morgan = require('morgan')
const path = require('path');
const { default: axios } = require('axios');
app.use(morgan('dev'));
const dbhelpers = require('./dbhelpers.js');
const { getTossAndTurns } = require('./dbhelpers.js');
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
app.use(express.static(PUBLIC_DIR))


app.get('/sleepData/:userId/:date', (req, res) => {
  const getSleepData = () => {
      axios.get(`https://s3.amazonaws.com/eight-public/challenge/${req.params.userId}.json`)
      
      .then((response) => {
        // pull in last nights data for all graphs except sleep score, pull in last three sleep scores
        const getSleepStartData = response.data.intervals[`${req.params.date}`].ts;
        const stagesData = dbhelpers.getStagesData(response.data.intervals[`${req.params.date}`].stages);
        const getPreviousScoresData = dbhelpers.getPreviousScoresData(response.data.intervals);
        const getTimeSeriesData = dbhelpers.getTimeSeriesData(response.data.intervals[`${req.params.date}`].timeseries)
        const getTossandTurnData = dbhelpers.getTossAndTurns(response.data.intervals[`${req.params.date}`].timeseries.tnt)
        
        //only use last nights data to send to client once proccessed
        Promise.all([ getSleepStartData, stagesData, getPreviousScoresData, getTimeSeriesData, getTossandTurnData])
          .then((values) => {
            res.send(values)
          })
          .catch((error) => {
            console.error(error)
          })
      })
      .catch((err) => {
        console.error(err);
      })

  }
  getSleepData();

})


app.listen(port, () => console.log(`App listening on port ${port}!`))
