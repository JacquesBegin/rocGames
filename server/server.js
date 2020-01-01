let express = require('express');
let path = require('path');
let cors = require('cors');
let bodyParser = require('body-parser');

let db = require('db/db.connection');

const profileRoute = require('./routes/profile');
const articleRoute = require('./routes/article');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());
// app.use(express.static(path.join(__dirname, )));
// app.use('/', express.static(path.join(__dirname, )));
// app.use('/api', profileRoute);
// app.use('/api', articleRoute);

const port = process.env.PORT || 5555;
const server = app.listen(port, () => {
  console.log('Connected to port' + port);
});