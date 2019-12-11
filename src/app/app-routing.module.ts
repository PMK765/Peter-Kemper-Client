import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '',  loadChildren: './home-page/home-page.module#HomePageModule' },
  { path: 'home',  loadChildren: './home-page/home-page.module#HomePageModule' },
  { path: 'find',  loadChildren: './find-fields/find-fields.module#FindFieldsModule' },
  { path: 'fields',  loadChildren: './view-fields/view-fields.module#ViewFieldsModule' },
  { path: 'profile',  loadChildren: './profile/profile.module#ProfileModule' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
