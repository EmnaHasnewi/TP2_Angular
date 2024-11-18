import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent {
  @Input() cvs: any[] = []; // Liste des CVs passée depuis le parent
  @Output() cvSelected = new EventEmitter<any>(); // Événement pour sélectionner un CV

  // Méthode appelée au clic sur un CV
  selectCv(cv: any) {
    this.cvSelected.emit(cv);
  }
}
