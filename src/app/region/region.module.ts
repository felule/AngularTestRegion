import { MaterialModule } from './../shared/module/material-module/material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RegionComponent } from './region.component';



@NgModule({
  declarations: [
    RegionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports: [
    RegionComponent
  ]
})
export class RegionModule { }
