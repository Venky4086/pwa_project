import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookitemRoutingModule } from './cookitem-routing.module';
import { CookitemComponent } from './cookitem.component';


@NgModule({
  declarations: [
    CookitemComponent
  ],
  imports: [
    CommonModule,
    CookitemRoutingModule
  ]
})
export class CookitemModule { }
