import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookRoutingModule } from './cook-routing.module';
import { CookComponent } from './cook.component';


@NgModule({
  declarations: [
    CookComponent
  ],
  imports: [
    CommonModule,
    CookRoutingModule
  ]
})
export class CookModule { }
