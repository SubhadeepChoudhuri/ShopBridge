import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddItemComponent } from './add-item/add-item.component';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostFormDataService {

  postURL = 'http://localhost:3000/postData';
  constructor(private postHttp: HttpClient) { }

  postData(item: AddItemComponent) {
    //var mysql = require('mysql');
    //console.log(item);
    console.log(item.name);
    console.log(item.descr);
    console.log(item.price);
    console.log(item.photo);

    /*const sql = require('mssql')

    var Server='LAPTOP-ECM1OCFK\SQLEXPRESS';
    var Database='Subho_DB';
    var username='';
    var password='';

 
async () => {
    try {
        // make sure that any items are correctly URL encoded in the connection string
        await sql.connect('mssql://'+username+':'+password+'@'+Server+'/'+Database)
        const result = await sql.query`INSERT INTO [Subho_DB].[dbo].[iteminfo] (name, descr, price, photo) VALUES (item.name, item.descr, item.price, item.photo)`
        console.dir(result)
    } catch (err) {
        // ... error checks
    }
}
    
   
 /* var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "Subho",
  password: "",
  database: "Subho_DB"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO subho_db.iteminfo (name, descr, price, photo) VALUES (item.name, item.descr, item.price, item.photo)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
}); */

    /* const mysql = require('mysql');
    const express = require('express');
    var app = express();
    const bodyparser = require('body-parser');
    
    app.use(bodyparser.json());
    
    var mysqlConnection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'sc_MySQL000@',
        database: 'subho_db',
        multipleStatements: true
    });
    
    mysqlConnection.connect((err) => {
        if (!err)
            console.log('DB connection succeded.');
        else
            console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
    });
    
    
    app.listen(3000, () => console.log('Express server is running at port no : 3000')); 
    
    //Get an employees
    /* app.get('/employees/:id', (req, res) => {
        mysqlConnection.query('SELECT * FROM Employee WHERE EmpID = ?', [req.params.id], (err, rows, fields) => {
            if (!err)
                res.send(rows);
            else
                console.log(err);
        })
    }); */

    //Delete an employees
    /* app.delete('/employees/:id', (req, res) => {
        mysqlConnection.query('DELETE FROM Employee WHERE EmpID = ?', [req.params.id], (err, rows, fields) => {
            if (!err)
                res.send('Deleted successfully.');
            else
                console.log(err);
        })
    }); */

    //Insert an employees
    /*app.post('/items', (req, res) => {
      var sql = "INSERT INTO subho_db.iteminfo (name, descr, price, photo) VALUES (item.name, item.descr, item.price, item.photo)";
      mysqlConnection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
      });
    });
    
    //Get all employees
    /*app.get('/items', (req, res) => {
      mysqlConnection.query('SELECT * FROM iteminfo', (err, rows, fields) => {
          if (!err){
            console.log(6);
          console.log(res);
              res.send(rows);
          }else{
              console.log(err);
          }
      })
    }); */

    //Update an employees
    /* app.put('/employees', (req, res) => {
        let emp = req.body;
        var sql = "SET @EmpID = ?;SET @Name = ?;SET @EmpCode = ?;SET @Salary = ?; \
        CALL EmployeeAddOrEdit(@EmpID,@Name,@EmpCode,@Salary);";
        mysqlConnection.query(sql, [emp.EmpID, emp.Name, emp.EmpCode, emp.Salary], (err, rows, fields) => {
            if (!err)
                res.send('Updated successfully');
            else
                console.log(err);
        })
    }); */


    return this.postHttp.post<any>(this.postURL, item)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
