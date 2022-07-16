const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
    let num1 = +req.body.num1;
    let num2 = +req.body.num2; 
    let result = num1 + num2;
    res.send("Sum is " + result);
});

app.listen(3000, function() {
    console.log("listening on port 3000");
});
