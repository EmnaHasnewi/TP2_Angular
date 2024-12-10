import { Component, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Cv, CvService } from '../services/cv.service';
import { ToastrService } from 'ngx-toastr';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  //selectedCv: any = null;
  searchTerm: string = '';
  cvs: Cv[] = [];
  filteredCvs: Cv[] = [];
  embauches: Cv[] = [];
  selectedCv: Cv | null = null; // Holds the selected CV

  constructor(
    private cvService: CvService,
    private embaucheService: EmbaucheService, 
    private toastr: ToastrService,

  ) {}

  ngOnInit(): void {
    // Charger les CV
    this.cvService.cvList$.subscribe(data => {
      this.cvs = data;
    this.filteredCvs = [...this.cvs]; // Initialize filteredCvs
    console.log('CVs chargés :', this.cvs);
    });

    // Souscrire à la sélection
    this.cvService.selectedCv$.subscribe((cv) => {
      this.selectedCv = cv;
    });
  }
  embaucher(id: number): void {
    const cv = this.cvs.find(c => c.id === id);
    if (cv) {
      if (cv.isEmbauche) {
      } else {
        //this.filteredCvs = this.filteredCvs.map(c => (c.id === id ? cv : c)); // Update filtered list
        this.embaucheService.embaucherCv(id); // Notify the service
        this.updateEmbauches(); // Refresh embauches list
      }
    }}
  

  updateEmbauches(): void {
    this.embaucheService.getEmbauches().subscribe((embauches) => {
    this.embauches = embauches; // Update the embauches list
    });
  }

  selectCv(cv: Cv): void {
    this.selectedCv = cv;  }
  // Filter CVs based on the search term
  filterCvs() {
    this.filteredCvs = this.cvs.filter(cv =>
      `${cv.firstname} ${cv.name}`.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
