const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const compression = require('compression')
const resolvePath = require('path').resolve
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')


// DB connection setting

const MONGODB_URL = process.env.MONGODB_URL

mongoose.Promise = global.Promise;

mongoose.connect(MONGODB_URL,
  {
    useNewUrlParser: true,
  }
)
  .then(() => {
    console.log("Successfully connected to the database");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Error...", err);
    process.exit();
  });


const app = express();


app.use(cors())
app.use(compression())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(resolvePath(__dirname, '../bmxarto_frontend/build')))

// Include files for routes
require('./app/routes/app.routes.js')(app);

app.get('/*', (req, res) => {
  const contents = fs.readFileSync(
    resolvePath(__dirname, '../bmxarto_frontend/build/index.html'),
    'utf8',
  )
  res.send(contents)
})

let PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

