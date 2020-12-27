const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(cors());



app.get('/', function(req,res){
    //res.send('Hello from server!');
    //console.log(res);
    var sql = require("mssql");
    // config for your database
    var config = {
        user: 'Subho',
        password: '123',
        server: 'localhost\\SQLEXPRESS', 
        database: 'Subho_DB',
        options: {           
            encrypt: true,
            enableArithAbort: true
        }
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select itemID,name,descr,price,photo from [Subho_DB].[dbo].[ItemInfo]', function (err, recordset) {
            
            if (err) console.log(err);
            // send records as a response
            res.send(recordset);
            
        });
});

});

app.post('/postData', function(req,res){

    console.log(666);

    console.log(req.body);

    var sql = require("mssql");

   // config for your database
   var config = {
    user: 'Subho',
    password: '123',
    server: 'localhost\\SQLEXPRESS', 
    database: 'Subho_DB',
    options: {
            encrypt: true,
            enableArithAbort: true
     }
};


    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query("INSERT INTO [Subho_DB].[dbo].[ItemInfo] (name, descr, price, photo) VALUES ('"+req.body.name+"', '"+req.body.descr+"', '"+req.body.price+"', '"+req.body.photo+"')", function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset); 
            
        });
});  
    
});

app.listen(PORT, function(){
    console.log('Server running on localhost:' + PORT);
});
