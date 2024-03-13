const express = require('express');
require('./src/config/dotenv')();
require('./src/config/sequelize');

const app = express();
const port = process.env.PORT;
//const cors = require('cors');
const routes = require('./src/routes/routes');
const path = require('path')
const passport = require("passport");
const cors = require('cors');
require("./src/middlewares/jwtPassport")(passport);
app.use(passport.initialize());

//app.use(passport.session());
const corsOptions = {
  origin: '*', 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
  credentials: true, 
};


app.use(cors(corsOptions))
app.get('/', (req, res) => {
  res.send('Hello World!')
});


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));



app.listen(port, () => {
  console.log(`${process.env.APP_NAME} app listening at http://localhost:${port}`);
});
    