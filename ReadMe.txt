Steps done:

1.Install the project in angular by using:

ng new ShopBridge ( commands are typed via Git Bash terminal)

2.Install bootstrap by using:

* npm install -s bootstrap@3.3.7
* add the below line in styles.css	
	@import '~bootstrap/dist/css/bootstrap.css'
	
3.Created AddItemComponent, ItemDetailsComponent by using:

ng g c {componentName}

4.Used ReactiveFormsModule for using reactive form by using:

* import { ReactiveFormsModule } from '@angular/forms';
* ReactiveFormsModule in imports section

5.Created PostFormDataService by using:

ng g s {serviceName}

6.Used:

import { HttpClientModule} from '@angular/common/http'; (in app.module.ts, for using http)
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; (in PostFormDataService, for using http)
import { catchError } from 'rxjs/operators'; (in PostFormDataService, for detecting error)
import { throwError } from 'rxjs'; (in PostFormDataService, for detecting error)
import { CommonModule } from '@angular/common';  (for using common module functions)

7.Used postURL = 'http://localhost:3000/postData'; (as API where the form data is submitted via PostFormDataService)

8.Created new folder 'server' in app folder.

Here 'server.js' file is created where several consts are defined (including const for port), also methods like get,post(for expressing request/response) and listen(for expressing port running) are defined.

9. We have to type ng serve -o in git bash opened inside root 'ShopBridge' folderto make the http://localhost:4200/ open in browser.

10. Then for making the api working we have to open new terminal of git bash inside server folder & type:

node server [Enter] -> to make http://localhost:3000/ server start running in browser.

11. When http://localhost:4200/ is opened, then we will find ADD ITEM button (on clicking this button will open modal containing the form fields, form is designed by usage of ReactiveForm)

12.import { FormBuilder, FormControl, FormGroup } from '@angular/forms'; is done to make the form working.

13.import { Validators } from '@angular/forms'; is done for validation required to be done to the necessary form fields.

14.After entering validated data in the form, we are able to submit the form data to the above desired api url ('http://localhost:3000/postData') where data gets posted via postData(formdataArray) called in PostFormDataService

where ultimately submitted data is returned

15. Using .subscribe() to postFormDataService.postData(this.itemForm.value), on successful operation we are pushing the submiited form data values into empty 
object declared as itemObj &
then pushing the object into an empty array declared as itemsArr & in case operation failure we are able to get the error message by using err.statusText
& using interpolation binding
we are able to display the error message in top most part of browser. In case of success, using *ngFor directive (to create loop of list of each item created) 
& using interpolation binding 
(values coming from itemsArr), we are able to display each item record values like name,price of each created item with pic(optional incase uploaded) in the 
browser under 'My Items' heading.
 
16.Using routerLink against each item record i,e li tag & describing route path in app-routing.module.ts, we are able to enter to ItemDetailsComponent html page 
& by creating a copy of itemsArr as itemsArr2 in AddItemComponent.ts file & then using static keyword to it (for making global usage) & then importing it to 
ItemDetailsComponent.ts file
& then using interpolation binding we are able to display all the details of that particular clicked item in a bigger picture like: 
name, description, price, with photo) in the browser.





