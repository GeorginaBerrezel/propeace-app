import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, of, map, tap } from 'rxjs';

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

  private annonces: Annonce[] = [];
  private annoncesSubject = new BehaviorSubject<Annonce[]>([]);

  constructor(private http: HttpClient) {
    this.loadAnnonces();
  }

  // Charge les annonces depuis JSON une fois au démarrage
  private loadAnnonces() {
    this.http.get<Annonce[]>(this.url).subscribe(data => {
      this.annonces = data;
      this.annoncesSubject.next(this.annonces);
    });
  }

  getAnnonces(): Observable<Annonce[]> {
    return this.annoncesSubject.asObservable();
  }

  getAnnonceById(id: string | number): Observable<Annonce | undefined> {
    const idNum = typeof id === 'string' ? Number(id) : id;
    return this.getAnnonces().pipe(
      map(annonces => annonces.find(a => a.id === idNum))
    );
  }

  addAnnonce(newAnnonce: Omit<Annonce, 'id'>): Observable<void> {
    const maxId = this.annonces.length ? Math.max(...this.annonces.map(a => a.id)) : 0;
    const annonceToAdd: Annonce = { id: maxId + 1, ...newAnnonce };
    this.annonces.push(annonceToAdd);
    this.annoncesSubject.next(this.annonces);
    return of(void 0);
  }

  deleteAnnonce(id: number): Observable<void> {
    this.annonces = this.annonces.filter(a => a.id !== id);
    this.annoncesSubject.next(this.annonces);
    return of(void 0);
  }
}
