import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AddItemComponent } from './add-item/add-item.component';

@Injectable({
  providedIn: 'root'
})
export class GetFormDataService {

  getURL= 'http://localhost:3000/postData';
  constructor(private getHttp: HttpClient) { }

  getData(){
    return this.getHttp.get<any>(this.getURL)
    .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return throwError(error);
  }
}
