import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuisineComponent } from './cuisine.component';
const routes: Routes = [{ path: '', component: CuisineComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuisineRoutingModule { }
