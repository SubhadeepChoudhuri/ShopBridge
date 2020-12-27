import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { PostFormDataService } from '../post-form-data.service';
import { GetFormDataService } from '../get-form-data.service';
import { ListItemComponent } from '../list-item/list-item.component';

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

  url: any;
  submitted = false;
  errorMssg = '';

  itemObj = {"name": '', "descr": '', "price": '', "photo_src": ''};
  itemsArr = [];
  items2: any[];
  static itemsArr2: any = [];
  
  constructor(private fb: FormBuilder, private postFormDataService: PostFormDataService) { }

  ngOnInit(): void {

    this.itemForm = new FormGroup({
    name: new FormControl(this.name, [Validators.required]),
      descr: new FormControl(this.descr, [Validators.required]),
        price: new FormControl(this.price, [Validators.required]),
        photo: new FormControl(this.photo, [])
      });
      
  }

    onSelectFile(event) { // called each time file input changes
        if (event.target.files && event.target.files[0]) {
          var reader = new FileReader();

          reader.readAsDataURL(event.target.files[0]); // read file as data url

          reader.onload = (event) => { // called once readAsDataURL is completed
            this.url = event.target.result;
          }
         
          //this.url = event.target.value;
          //this.url = event.target.value.replace("C:\\fakepath\\", " ..\\assets\\images\\");
          //console.log(this.url);
         
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
  addRec = [];
  submitItemValues() {
    // TODO: Use EventEmitter with form value
    if(this.itemForm.valid){
    //document.getElementById('myModal').style.display = 'none';
    this.submitted = true;
    //console.log('form submitted!',this.itemForm.value);
    console.log(this.itemForm.value.name);
    console.log(ListItemComponent.items2);
    let dupliateIndex = ListItemComponent.items2.findIndex(row=>row.name == this.itemForm.value.name);
    console.log(dupliateIndex);
    if(dupliateIndex == -1){
    this.postFormDataService.postData(this.itemForm.value)
    .subscribe(res=> {
      console.log(res);
    });
  }

  }

}

}
