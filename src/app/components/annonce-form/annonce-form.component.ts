import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Annonce } from '../../services/annonce.service';

@Component({
  selector: 'app-annonce-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './annonce-form.component.html',
  styleUrls: ['./annonce-form.component.scss']
})
export class AnnonceFormComponent {
  @Output() addAnnonce = new EventEmitter<Annonce>();

  newAnnonce: Partial<Annonce> = {
    titre: '',
    ville: '',
    surface: undefined,  // undefined au lieu de null
    prix: undefined,
    description: '',
    datePublication: ''
  };

  onSubmit(form: NgForm) {
    if (form.valid) {
      const annonceToAdd: Annonce = {
        id: Date.now(),  // id temporaire
        titre: this.newAnnonce.titre!,
        ville: this.newAnnonce.ville!,
        surface: this.newAnnonce.surface!,  // le ! pour dire "je suis sûr que c'est défini"
        prix: this.newAnnonce.prix!,
        description: this.newAnnonce.description!,
        datePublication: this.newAnnonce.datePublication!
      };

      this.addAnnonce.emit(annonceToAdd);

      form.resetForm();
      // reset aussi l'objet pour éviter problème après resetForm
      this.newAnnonce = {
        titre: '',
        ville: '',
        surface: undefined,
        prix: undefined,
        description: '',
        datePublication: ''
      };
    }
  }
}
