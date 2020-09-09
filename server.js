const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const mongoose = require('mongoose');
const routes = require('./src/routes');
require('./src/redis.js');

const app = express();
const port = process.env.PORT || 4001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', routes);

mongoose.Promise = global.Promise;
mongoose.connect(config.dburl, {
        useNewUrlParser: true
    }).then(() => {
        console.log("Successfully connected to the database");
    }).catch(err => {
        console.log('Could not connect to the database.', err);
        process.exit();
    });

app.get('/', (req, res) => {
   res.json({"message": "Hello World"});
});

app.listen(port, () => {
   console.log(`Node server is listening on port ${port}`);
});
