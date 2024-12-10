import { Injectable } from '@angular/core';
import { CvService } from './cv.service'; // Importer CvService pour accéder aux CVs
import { map, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cv } from './cv.service'; // Si Cv est défini dans un autre service

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  cvs: Cv[] = []; // Ajoutez la propriété pour stocker les CVs localement


  private embauches: any[] = []; // Stocker les CVs embauchés localement
  private cvSubject = new BehaviorSubject<Cv[]>([]); // Crée un BehaviorSubject pour les CVs
  cvList$ = this.cvService.cvList$;
  constructor(private cvService: CvService) {
    // Subscribe to the cvList$ to keep this.cvs updated
    this.cvService.cvList$.subscribe((cvs) => {
      this.cvs = cvs; // Update local cvs array with the latest data
    });
  } 
  updateCvs(cvs: Cv[]): void {
    this.cvSubject.next(cvs); // Update the BehaviorSubject with the new list of CVs
  }
  embaucherCv(id: number): void {
    const cv = this.cvs.find((c: Cv) => c.id === id); // Vérifie dans la liste locale

    if (cv) {
      if (cv.isEmbauche) {
        console.log('Ce CV est déjà embauché.');
      } else {
        cv.isEmbauche = true;
        this.embauches.push(cv);
        this.cvSubject.next([...this.cvs]); // Met à jour l'état local
        console.log('CV embauché avec succès !');
      }
    } else {
      console.log('CV introuvable.');
    }
  }
  
  // Get all hired CVs
  getEmbauches(): Observable<any[]> {
    return new Observable((observer) => {
      observer.next(this.embauches); // Return the hired CVs
      observer.complete();
    });
  }
}
