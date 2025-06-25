import { RenderMode, ServerRoute, PrerenderFallback } from '@angular/ssr';
import { inject } from '@angular/core';
import { AnnonceService } from './services/annonce.service';
import { firstValueFrom, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Annonce {
  id: string;
}

export const serverRoutes: ServerRoute[] = [ 
  {
    path: '',
    renderMode: RenderMode.Prerender
  },
  {
    path: 'annonce/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams(): Promise<Array<{ id: string }>> {
      const obs = inject(AnnonceService).getAnnonces() as unknown as Observable<Annonce[]>;

      const annoncesWithId = await firstValueFrom(
        obs.pipe(
          map((list: Annonce[]) =>
            list.map((item: Annonce) => ({ id: item.id }))
          )
        )
      );

      return annoncesWithId;
    },
    fallback: PrerenderFallback.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender,
  },
];







