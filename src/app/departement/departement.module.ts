import { DepartementComponent } from './departement.component';
import { MaterialModule } from '../shared/module/material-module/material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DepartementComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    DepartementComponent
  ]
})
export class DepartementModule { }
