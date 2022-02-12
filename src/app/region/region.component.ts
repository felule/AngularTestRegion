import { Departement } from './../shared/model/departement.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { map, Observable, startWith, Subject, takeUntil } from 'rxjs';
import { instanceOfRegion, Region } from '../shared/model/regions.model';
import { GeoApiService } from '../shared/servies/geoApiService/geoApi.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.css']
})
export class RegionComponent implements OnInit {

  private destroy$ = new Subject();
  
  
  regionForm!: FormGroup
  filteredRegions!: Observable<Region[]>;
  departements!: Departement[];
  displayedColumns: string[] = ['nom', 'code'];

  constructor(
    private fb: FormBuilder,
    private geoApiService: GeoApiService,
    private router: Router) { }

  ngOnInit(): void {

    this.regionForm = this.fb.group({
      region: new FormControl()
    });

    this.regionForm.get('region')?.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(region => {
      if(typeof region === 'string'){
        this._filterRegions(region)
      }else if(instanceOfRegion(region)) {
        this._filterRegions(region.nom);
        this.getDepartement(region);
      }
    });
  }
    
  ngOnDestroy() {
		this.destroy$.unsubscribe()
  }

  displayRegion(region: Region): string {
    return region && region.nom ? region.nom : '';
  }

  private _filterRegions(regionName: string ): void {
      this.filteredRegions =  this.geoApiService.getRegions(regionName);
  }

getDepartement(region: Region): void {
  this.geoApiService.getDepartement(region.code).subscribe((departements: Departement[])=> {
    this.departements = departements;
  });
}

goToDepartement(departement: Departement): void {
  this.router.navigate([`/${departement.code}/departement`]);
}


}
