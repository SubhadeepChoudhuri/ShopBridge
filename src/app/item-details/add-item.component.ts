import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PostFormDataService } from '../post-form-data.service';
import { GetFormDataService } from '../get-form-data.service';
import { CommonModule } from '@angular/common';  
import { Item } from '../item';
import { ITEMS } from '../mock-items';
import { ItemDetailsComponent } from '../item-details/item-details.component';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  name: any;
  descr: any;
  price: any;
  photo: any;
  itemForm: FormGroup;
  //selectedFile: File = null;
  url: any;
  submitted = false;
  errorMssg = '';

  itemObj = {"name": '', "descr": '', "price": '', "photo_src": ''};
  itemsArr = [];
  static itemsArr2: any = [];
  
  constructor(private fb: FormBuilder, private postFormDataService: PostFormDataService, private getFormDataService: GetFormDataService) { }

  ngOnInit(): void {
  
    this.itemForm = new FormGroup({
    name: new FormControl(this.name, [Validators.required]),
      descr: new FormControl(this.descr, [Validators.required]),
        price: new FormControl(this.price, [Validators.required]),
        photo: new FormControl(this.photo, [])
      });
      
  }

  /*onFileChanged(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image',this.selectedFile,this.selectedFile.name)
    this.http.post('', fd)
    .subscribe(res=>{console.log(res);
    });
  }*/

  
    onSelectFile(event) { // called each time file input changes
        if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();

          reader.readAsDataURL(event.target.files[0]); // read file as data url

          reader.onload = (event) => { // called once readAsDataURL is completed
            this.url = event.target.result;
            //console.log(656);
            //console.log(this.url);
          }
        }
    }

  openAddItemModal(){
    this.itemForm.reset();
    this.url = '';
    document.getElementById('myModal').style.display = 'block';
  }

  closeAddItemModal(){
    document.getElementById('myModal').style.display = 'none';
  }

  submitItemValues() {
    // TODO: Use EventEmitter with form value
    if(this.itemForm.valid){
    //document.getElementById('myModal').style.display = 'none';
    this.submitted = true;
    console.log('form submitted!',this.itemForm.value);
    this.postFormDataService.postData(this.itemForm.value)
    .subscribe(suc => {
      console.log('Success!',suc);
      //this.getFormDataService.getData();
      this.itemObj = {"name": this.itemForm.value.name , "descr": this.itemForm.value.descr, "price": this.itemForm.value.price, "photo_src": this.url };
      this.itemsArr.push(this.itemObj);
      
      AddItemComponent.itemsArr2 = this.itemsArr;
  },
  err => { this.errorMssg = err.statusText }
    );

    

    /*this.getFormDataService.getData(this.itemForm.value)
    .subscribe(
      data => console.log('Success!',data),
      error => this.errorMssg = error.statusText
    );*/
    
    //console.warn(this.itemForm.value);
    }
  }

}
