const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', function(req,res){
    res.send('Hello from server!');
    //console.log(res);
});

app.post('/postData', function(req,res){
    console.log(req.body);
    res.status(200).send({'message':'Data received!'});
    /*if(res.status == 200){
        console.log(666);
        console.log(res);   
    }*/   
});

app.listen(PORT, function(){
    console.log('Server running on localhost:' + PORT);
});
