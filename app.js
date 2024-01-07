const port = process.env.PORT | 3000;
const express = require('express');
const path = require('path');
const favicon = require("serve-favicon");
const app = express();

app.set('view engine' , 'ejs');

app.use(favicon(path.join(__dirname , 'public' , 'images' , 'favicon.ico')));
app.use("/" , require("./routes/index.js"));

// static resource rooting
app.use("/public" , express.static(path.join(__dirname, '/public')));

app.listen(port , () => {
    console.log("port running is " + port);
});