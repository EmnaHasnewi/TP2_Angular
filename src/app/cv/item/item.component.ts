import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  @Input() cv: any; // CV passé depuis le parent
  @Output() clicked = new EventEmitter<void>(); // Événement pour indiquer un clic

  // Méthode pour émettre un clic
  onClick() {
    this.clicked.emit();
  }
}
