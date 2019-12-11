import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewFieldsComponent } from './view-fields/view-fields.component';
import { Routes, RouterModule } from '@angular/router';

const viewFieldsRoutes: Routes = [
  { path: '', component: ViewFieldsComponent },
]

@NgModule({
  declarations: [ViewFieldsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(viewFieldsRoutes)
  ],
  exports: [
    RouterModule,
  ]
})
export class ViewFieldsModule { }
