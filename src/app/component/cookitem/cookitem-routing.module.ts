import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CookitemComponent } from './cookitem.component';

const routes: Routes = [{ path: '', component: CookitemComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CookitemRoutingModule { }
