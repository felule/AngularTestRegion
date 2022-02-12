import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';



const materialModule =  [
  MatFormFieldModule,
  MatInputModule,
  MatAutocompleteModule,
  MatTableModule
];

@NgModule({
  declarations: [],
  imports: [
    ...materialModule,
    CommonModule,
  ],
  exports: [
    ...materialModule
  ]
})
export class MaterialModule{ }
