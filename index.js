// API  in Node.js
const express = require('express'); // requre the express framework
const app = express();
const cors = require('cors');

const importData = require("./timestories.json");
let port = process.env.PORT || 8000;  

  
// CORS is enabled for all origins
app.use(cors());

app.get("/",(req,res) => {
    res.send("redirect to /getStories to get data ");
})
// Endpoint to Get a list of users
app.get('/getStories', function(req, res){
    res.send(importData);
})

// Create a server to listen at port 8080
app.listen(port, function(){
    console.log("TimeStories API is listening at http://localhost:", port)
})
