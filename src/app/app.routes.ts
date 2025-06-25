import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AnnonceDetailComponent } from './annonce-detail/annonce-detail.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'annonce/:id', component: AnnonceDetailComponent }
];
