import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { Routes, RouterModule } from '@angular/router';

const profileRoutes: Routes = [
  { path: '', component: ProfileComponent },
]

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ProfileModule { }