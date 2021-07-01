var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/bhawnagunwanidb",
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('You are connected to DB!!'); })
    .catch((error) => { console.log(error); })