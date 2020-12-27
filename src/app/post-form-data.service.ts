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

   /* console.log(item.name);
    console.log(item.descr);
    console.log(item.price);
    console.log(item.photo); */

    return this.postHttp.post<any>(this.postURL, item)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
