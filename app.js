const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(express.static("public"));
app.set(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
});

app.listen(3000, () =>{
    console.log("Server Started On Port 3000!");
})