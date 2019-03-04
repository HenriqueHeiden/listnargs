let express = require("express");
let app = express();
let port = process.env.PORT || 3000;
app.get("/", function(req,res){
    res.send("Welcome to NodeJS App on Heroku!");
});

app.listen(port);