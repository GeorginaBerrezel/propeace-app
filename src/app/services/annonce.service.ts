import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Annonce {
  id: number;
  titre: string;
  ville: string;
  prix: number;
  surface: number;
  datePublication: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class AnnonceService {

  private url = '/annonces.json';

  constructor(private http: HttpClient) {}

  getAnnonces(): Observable<Annonce[]> {
    return this.http.get<Annonce[]>(this.url);
  }
}
