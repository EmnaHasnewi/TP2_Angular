import { Component } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  selectedCv: any = null;
  searchTerm: string = '';

  cvs = [
    {
      id: 1,
      name: 'hasnaoui',
      firstname: 'emna',
      age: 23,
      cin: '12345678',
      job: 'data scientist',
      path: 'assets/confident-young-caucasian-woman-gestures-ok-hand-sign.jpg'
    },
    {
      id: 2,
      name: 'guesmi',
      firstname: 'chaima',
      age: 23,
      cin: '87654321',
      job: 'CEO',
      path: 'assets/smiling-young-beautiful-girl-gesturing-hi-with-copy-space.jpg'
    }  ,
     {
      id: 2,
      name: 'ben meftah',
      firstname: 'shams',
      age: 23,
      cin: '87654321',
      job: 'AI engineer',
      path: 'assets/sourire-d-un-air-affecté-blond-621210.webp'
    },
    {
      id: 2,
      name: 'bel hadj fraj',
      firstname: 'nour',
      age: 23,
      cin: '87654321',
      job: 'full stack developer',
      path: 'assets/smiling-young-beautiful-girl-with-copy-space.jpg'
    },   {
      id: 2,
      name: 'aloui',
      firstname: 'ghofrane',
      age: 23,
      cin: '87654321',
      job: 'cloud engineer',
      path: 'assets/sourire-aux-dents-jeune-employée-de-banque-féminine-bureau-isolée-sur-fond-gris-255396704 (1).webp'
    },
    {
      id: 2,
      name: 'jarboui',
      firstname: 'nada',
      age: 23,
      cin: '87654321',
      job: 'data analyst',
      path: 'assets/sourire-aux-dents-jeune-employée-de-banque-féminine-bureau-isolée-sur-fond-gris-255396704.webp'
    }
  ];

  filteredCvs = [...this.cvs];

  selectCv(cv: any) {
    this.selectedCv = cv;
  }

  filterCvs() {
    this.filteredCvs = this.cvs.filter(cv =>
      `${cv.firstname} ${cv.name}`.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
