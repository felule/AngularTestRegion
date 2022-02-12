import { Communes } from './../../model/communes.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';
import { Departement } from '../../model/departement.model';
import { Region } from '../../model/regions.model';

@Injectable({
  providedIn: 'root'
})
export class GeoApiService {

  private url = 'https://geo.api.gouv.fr';
  constructor(private http: HttpClient) { }

    /**
     * Retourne la liste des régions française corespondant au charactère saisie
     * @param nom : chaine (pas forcement complete) permettant de filtrer les regions
     * @returns Liste des regions corespondante
     */
  getRegions(nom: string): Observable<Region[]> {
    return this.http.get<Region[]>(`${this.url}/regions?nom=${nom}`);
  }

  /**
   * Retourne la liste des département d'une région française
   * @param codeRegion : code exacte de la region
   * @returns Liste des département de la région
   */
  getDepartement(codeRegion: string): Observable<Departement[]>{
    return this.http.get<Departement[]>( `${this.url}/regions/${codeRegion}/departements`);
  }

  /**
   * Retourne la liste des communes d'un departements
   * @param codeDepartement 
   * @returns Liste des communes du département
   */
  getCommunes(codeDepartement: string): Observable<Communes[]>{
    return this.http.get<Communes[]>( `${this.url}/departements/${codeDepartement}/communes`);
  }

}
