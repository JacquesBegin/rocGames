let express = require('express');
let path = require('path');
let cors = require('cors');
let bodyParser = require('body-parser');

let db = require('db/db.connection');

const profileRoute = require('./routes/profile');
const articleRoute = require('./routes/article');

const app = express();
