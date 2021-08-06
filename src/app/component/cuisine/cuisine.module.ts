import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CuisineRoutingModule } from './cuisine-routing.module';
import { CuisineComponent } from './cuisine.component';


@NgModule({
  declarations: [
    CuisineComponent
  ],
  imports: [
    CommonModule,
    CuisineRoutingModule
  ]
})
export class CuisineModule { }
