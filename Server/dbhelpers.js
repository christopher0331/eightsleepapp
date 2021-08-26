module.exports = { 

    getPreviousScoresData: (array) => {
        return new Promise((resolve, reject) => {
            let scores = [];
            const names = ["Last Night", "2 Nights Ago", "3 Nights Ago"]
            const colors = ["dodgerblue", "lightgreen", "yellow"]

            for(let i in array){
                scores.push({"name": names[i], "score": array[i].score, "fill": colors[i]})
            }
            resolve(scores.reverse())
            reject("Something went wrong in getPreviousScoresData")
        })
    },

    getStagesData: (array) => {
        return new Promise((resolve, reject) => {
            let stageValues = {};
            for(let stage of array){
                let stageOfSleep = stage.stage
                if(stageValues[stageOfSleep] === undefined){
                    stageValues[stageOfSleep] = stage.duration
                } else {
                    stageValues[stageOfSleep] += stage.duration
                }
                if(stageValues.out === undefined){
                    stageValues.out = 0;
                }
            }
            function getPercentage(array, target){
                let total = stageValues.awake + stageValues.light + stageValues.deep + stageValues.out
                return Math.floor((target/total)*100)
            }
              
            let results = [
                {
                  "name" : "awake", 
                  "value" : getPercentage(array, stageValues.awake)
                }, 
                {
                  "name": "light", 
                  "value": getPercentage(array, stageValues.light)
                }, 
                {
                  "name": "deep", 
                  "value": getPercentage(array, stageValues.deep)
                }, 
                {
                  "name": "out", 
                  "value": getPercentage(array, stageValues.out)
                }
            ];
            resolve(results)
            reject('error, something went wrong in getStagesData')
        })
    }, 

    
    getTimeSeriesData: (array) => {
        padSeriesData(array.tempBedC, array.respiratoryRate)
        padSeriesData(array.tempBedC, array.heartRate)

        let times = getTimeIntervals(array.tempRoomC);
        return new Promise((resolve, reject) => {
            let timeseries = [];

            for(let i = 0; i < times.length; i++){
                let currentTimeseries = {
                    "name": times[i],
                    "Room Temp": Math.floor(convertCelsius(array.tempRoomC[i][1])),
                    "Bed Temp": Math.floor(convertCelsius(array.tempBedC[i][1])),
                    "Respiratory Rate": Math.floor(array.respiratoryRate[i][1]),
                    "Heart Rate": Math.floor(array.heartRate[i][1])
                }
                timeseries.push(currentTimeseries);
            }
            resolve(timeseries)
        })
    }
}

function padSeriesData(controlArray, array2){
    if(controlArray.length !== array2.length){
        for(let i = 0; i < controlArray.length; i++){
            if(!array2[i]){
                array2[i] = [controlArray[i][0], NaN]
            }
            if(controlArray[i][0] !== array2[i][0]){
                array2.splice(i, 0, controlArray[i])
                array2[i] = [controlArray[i][0], NaN]
            }
        }
    }
    return array2
}

function convertCelsius(integer){
    return (integer * 1.8) + 32
}

function getTimeIntervals(array){
    let times = [];
    for(let i = 0; i < array.length; i++){
        let time = array[i][0].slice(11, 13);
        times.push(time);
    }

    return times;
}

