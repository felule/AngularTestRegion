import { MaterialModule } from './../shared/module/material-module/material-module';
import { Communes } from './../shared/model/communes.model';
import { Departement } from './../shared/model/departement.model';
import { GeoApiService } from './../shared/servies/geoApiService/geoApi.service';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from  '@angular/common/http/testing';
import { DepartementComponent } from './departement.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

describe('DepartementComponent', () => {
  let component: DepartementComponent;
  let fixture: ComponentFixture<DepartementComponent>;
  let httpTestingController: HttpTestingController;
  let geoApiService: GeoApiService;
  let compiled: HTMLElement;

  const mockDepartement: Communes[] = [
    {
      code: '1',
      codeDepartement: '15',
      codesPostaux: ['11111'],
      codeRegion :'14',
      nom: 'DepartementDuFun',
      population: 1000
    },
    {
      code: '2',
      codeDepartement: '15',
      codesPostaux: ['22222'],
      codeRegion :'14',
      nom: 'DepartementDuSwagg',
      population: 1000
    }
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepartementComponent ],
      imports: [ HttpClientTestingModule, MaterialModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {snapshot: {params: {'codeDepartement': '15'}}}
      }
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartementComponent);
    httpTestingController = TestBed.inject(HttpTestingController);
    geoApiService = TestBed.inject(GeoApiService);
    component = fixture.componentInstance;
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Departement with code Departement', () => {
    const request = httpTestingController.expectOne('https://geo.api.gouv.fr/departements/15/communes');
    request.flush(mockDepartement);
    fixture.detectChanges();
    expect(compiled.querySelectorAll('tr')?.length).toEqual(3);
  });
});
