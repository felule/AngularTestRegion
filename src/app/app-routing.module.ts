import { DepartementComponent } from './departement/departement.component';
import { RegionComponent } from './region/region.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'region', pathMatch: 'full'},
  {path: 'region', component: RegionComponent},
  {path: ':codeDepartement/departement', component: DepartementComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
