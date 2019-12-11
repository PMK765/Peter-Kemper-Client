import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindFieldsComponent } from './find-fields/find-fields.component';
import { Routes, RouterModule } from '@angular/router';

const findFieldsRoutes: Routes = [
  { path: '', component: FindFieldsComponent },
]

@NgModule({
  declarations: [FindFieldsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(findFieldsRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class FindFieldsModule { }
