
"use strict";
const jData = '/../../data/';
const express = require("express");
const movies_1 = require("./api/movies");
const db_1 = require("./data/db");
db_1.default.connect();
let app = express();
// uncomment after placing your favicon in /public
//app.use(favicon('public', 'favicon.ico'));

app.use('/api', express.static('src/server/api'));
app.use('/', index_1.default);
//app.use('/users', users_1.default);
app.use('/api/movies', movies_1.default);
app.set('port', (process.env.PORT || 5000));
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
