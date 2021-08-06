import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CuisineitemRoutingModule } from './cuisineitem-routing.module';
import { CuisineitemComponent } from './cuisineitem.component';


@NgModule({
  declarations: [
    CuisineitemComponent
  ],
  imports: [
    CommonModule,
    CuisineitemRoutingModule
  ]
})
export class CuisineitemModule { }
