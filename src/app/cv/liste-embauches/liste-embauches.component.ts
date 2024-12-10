import { Component, Input } from '@angular/core';
import { EmbaucheService } from '../../services/embauche.service';

@Component({
  selector: 'app-liste-embauches',
  templateUrl: './liste-embauches.component.html',
  styleUrl: './liste-embauches.component.css'
})
export class ListeEmbauchesComponent {
  @Input() embauches: any[] = []; 

  constructor(private embaucheService: EmbaucheService) {}
  ngOnInit(): void {
    this.embaucheService.getEmbauches().subscribe((data) => {
      this.embauches = data;
    });
  }
  

}
