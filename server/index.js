//for express
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const path = require('path');

//cross compatibility stuff
const cors = require('cors');

//initialize app with express
const app = express();

//middleware for dependencies
app.use(bodyParser.urlencoded({
  extended:false
}));
app.use(bodyParser.json())
app.use(express.json());
app.use(cors());
app.use(passport.initialize());

require('./config/passport')(passport);

const db = require('./config/keys').mongoURI;
mongoose.connect(db, {useNewUrlParser:true}).then(() =>{
  console.log('Database connected successfully!' + db);
}).catch(err => {
  console.log('Unable to connect to the database ${err}')
});

//initially set up as a simple crud app for posting
const posts = require('./routes/api/posts')
const users = require('./routes/api/users')

app.use('/api/posts', posts);
app.use('/api/users', users);

//handle production
if(process.env.NODE_ENV === 'production') {
    //static folder - __dirname = current directory  and concatenate instead of using path module
    //look at that folder as our static folder
    app.use(express.static(__dirname + '/public/'));

    //handle spa - any route
    app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

//port for heroku, localhost will run on 5000
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))
