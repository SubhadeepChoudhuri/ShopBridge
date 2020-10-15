import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { ItemDetailsComponent } from './item-details/item-details.component';

const routes = [
  { path: 'itemDetails', component: ItemDetailsComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
