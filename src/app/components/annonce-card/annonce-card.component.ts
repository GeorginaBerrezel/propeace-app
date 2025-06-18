import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Annonce } from '../../services/annonce.service';

@Component({
  selector: 'app-annonce-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './annonce-card.component.html',
  styleUrls: ['./annonce-card.component.scss']
})
export class AnnonceCardComponent {
  @Input() annonce!: Annonce;  // Input pour recevoir l’annonce à afficher
}
