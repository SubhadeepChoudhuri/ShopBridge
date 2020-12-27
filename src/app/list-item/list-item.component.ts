import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PostFormDataService } from '../post-form-data.service';
import { GetFormDataService } from '../get-form-data.service';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  items: any[] = [];

  static items2: any[] = [];

  constructor(private getFormDataService: GetFormDataService) { }


  ngOnInit(): void {

   /* var Buffer = require('buffer').Buffer;
    var fs = require('fs');
    var cb = require('cb'); */
    

    this.getFormDataService.getData()
      .subscribe(res=> {
        for(var i=0; i<res.recordset.length; i++){ 

    this.items.push(res.recordset[i]);
ListItemComponent.items2.push(res.recordset[i]);

      }

});

/*var getData = this.dataService.getData();

console.log(getData);

var x = this.items[0].name;

  console.log(x);

  this.originalBase64ImageStr = new Buffer(this.items[0].photo).toString('utf8');

  this.decodedImage = Buffer.from(this.originalBase64ImageStr , 'base64');

  console.log(this.decodedImage);

  this.items[0].photo = '../Upload/'+this.items[0].itemID+'.jpg';


fs.appendFile(this.items[0].photo, this.decodedImage, function(err,data){
  if (err) throw err;
console.log('It is saved!');
cb(data);

});*/
  

}



}
