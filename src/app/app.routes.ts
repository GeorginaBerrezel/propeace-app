import { Routes } from '@angular/router';
import { AnnonceListComponent } from './components/annonce-list/annonce-list.component';
import { AnnonceDetailComponent } from './annonce-detail/annonce-detail.component';

export const routes: Routes = [
  { path: '', component: AnnonceListComponent },
  { path: 'annonce/:id', component: AnnonceDetailComponent },
];
