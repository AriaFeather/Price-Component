const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.set(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});


let port = process.env.PORT;
if (port == null || port == ""){
    port = 3000;
}

app.listen(port, () => {
        console.log("Server Started!");
    });