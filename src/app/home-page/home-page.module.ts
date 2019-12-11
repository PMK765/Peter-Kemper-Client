import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { Routes, RouterModule } from '@angular/router';

const homePageRoutes: Routes = [
  { path: '', component: HomePageComponent },
]

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(homePageRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class HomePageModule { }
