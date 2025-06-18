import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  @Input() annonce!: Annonce;
  @Output() delete = new EventEmitter<number>();

  onDelete(event: Event) {
    event.stopPropagation();  // Stop la propagation du clic au lien parent
    this.delete.emit(this.annonce.id);
  }
}
