import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'cuisine', loadChildren: () => import('./component/cuisine/cuisine.module').then(m => m.CuisineModule) }, { path: 'cook', loadChildren: () => import('./component/cook/cook.module').then(m => m.CookModule) }, { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }, { path: 'cuisineitem', loadChildren: () => import('./component/cuisineitem/cuisineitem.module').then(m => m.CuisineitemModule) }, { path: 'cookitem', loadChildren: () => import('./component/cookitem/cookitem.module').then(m => m.CookitemModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
