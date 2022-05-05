// API  in Node.js
var express = require('express'); // requre the express framework
var app = express();
var fs = require('fs'); //require file system object
const cors = require('cors');
  
  
// CORS is enabled for all origins
app.use(cors());


// Endpoint to Get a list of users
app.get('/getStories', function(req, res){
    fs.readFile(__dirname + "/" + "timestories.json", 'utf8', function(err, data){
        console.log(data);
        res.end(data); 
    });
})

// Create a server to listen at port 8080
var server = app.listen(8000, function(){
    var port = server.address().port
    console.log("TimeStories API is listening at http://localhost:", port)
})