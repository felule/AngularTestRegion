import { Communes } from './../shared/model/communes.model';
import { GeoApiService } from './../shared/servies/geoApiService/geoApi.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.css']
})
export class DepartementComponent implements OnInit {

  communes!: Communes[];
  displayedColumns: string[] = ['nom', 'code', 'codeDepartement', 'codeRegion', 'population'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private geoApiService: GeoApiService) { }

  ngOnInit(): void {
    
    const codeDepartement = this.activatedRoute.snapshot.params['codeDepartement'];
    this.geoApiService.getCommunes(codeDepartement).subscribe((communes: Communes[]) =>
      this.communes = communes
    );

  }

}