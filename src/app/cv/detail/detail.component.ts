import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cv } from '../../services/cv.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent {
  @Input() cv: Cv | null = null; // Initialize with null
  @Output() embauche = new EventEmitter<number>(); // Émet un événement contenant l'ID du CV
  constructor(private toastr: ToastrService) {}
  // Méthode pour notifier le parent d'une embauche
  onEmbaucher(): void {
    if (this.cv) {
      if (this.cv.isEmbauche) {
        this.toastr.warning('Ce CV a déjà été embauché ou supprimé.', 'Avertissement');
      } else {
        this.embauche.emit(this.cv.id); // Emit the selected CV ID
        this.toastr.success('CV embauché avec succès!', 'Succès');

        console.log('hello from detail component');
       
      }
    }
  }
}
