import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CuisineitemComponent } from './cuisineitem.component';

const routes: Routes = [{ path: '', component: CuisineitemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CuisineitemRoutingModule { }
