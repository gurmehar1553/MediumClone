const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors');
const PORT = 4000;

app.use(cors())
app.use(express.json())

app.use(express.static('dist'));

app.use("/api/posts",require("./controllers/postsApi"))
app.use("/api/loginSignup",require("./controllers/loginSignUp"))

const DATABASE_CONNECTION_STRING = 'mongodb://localhost:27017/Users'

mongoose.connect(DATABASE_CONNECTION_STRING).then(() => console.log("Connected to DataBase!")).catch((e) => console.error("Couldn't Connect to database due to:",e.message))

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/build/index.html'));
  });

app.listen(PORT, () => console.log("Server Running on port:",PORT));