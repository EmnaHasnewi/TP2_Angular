import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, delay, map, Observable, of, tap } from 'rxjs';

export interface Cv {
  id: number;
  name: string;
  firstname: string;
  age: number;
  cin: string;
  job: string;
  path: string;
  isEmbauche: boolean; // Par défaut
  socialLinks?: {
    facebook?: string;
    google?: string;
    twitter?: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private apiUrl = 'https://apilb.tridevs.net/api/personnes';
  private cvSubject = new BehaviorSubject<Cv[]>([]); // Holds the CV list
  cvList$: Observable<Cv[]> = this.cvSubject.asObservable(); // Observable to subscribe to CV list
  private cvs: Cv[] = []; // Local cache for fallback
  private selectedCvSubject = new BehaviorSubject<Cv | null>(null);
  selectedCv$ = this.selectedCvSubject.asObservable();

// Méthode pour mettre à jour le CV sélectionné
  selectCv(cv: Cv | null): void {
  this.selectedCvSubject.next(cv);
  }
  constructor(private http: HttpClient) {
    this.getCvs().subscribe();

    this.cvList$.subscribe(data => {
      console.log('cvList$ emits:', data);
    });
  }
  // Fetch CVs from the API or return fallback data
  getCvs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(this.apiUrl).pipe(
      map(cvs => {
        this.cvs = cvs.map(cv => ({
          ...cv,
          isEmbauche: cv.isEmbauche ?? false // Ajoute la propriété si elle n'existe pas
        }));
        this.cvSubject.next([...this.cvs]); // Émet les nouvelles données
        return this.cvs;
      }),
      catchError(error => {
        console.error('Erreur lors de la récupération des CVs:', error);
        this.cvs = this.fakeCvs(); // Utilise les données fictives en fallback
        this.cvSubject.next([...this.cvs]); // Émet les données fictives
        return of(this.cvs);
      })
    );
  }
  
  

  // Get a CV by its ID as an observable
  getCvById(id: number): Observable<Cv | undefined> {
    const cv = this.cvs.find((cv: Cv) => cv.id === id);
    return of(cv);
  }

  // Delete a CV by ID and update the local cache
  deleteCv(id: number): Observable<void> {
    this.cvs = this.cvs.filter(cv => cv.id !== id);
    this.cvSubject.next(this.cvs); // Emit updated list
    console.log(`CV with ID ${id} deleted successfully.`);
    console.log('New CV list:', this.cvs);
    return of(); // Simulating async behavior
  }

  // Fallback fake CV data
  private fakeCvs(): Cv[] {
    return [
      {
        id: 1,
        name: 'hasnaoui',
        firstname: 'emna',
        age: 23,
        cin: '12345678',
        job: 'data scientist',
        path: 'assets/confident-young-caucasian-woman-gestures-ok-hand-sign.jpg',
        isEmbauche: false
      },
      {
        id: 2,
        name: 'guesmi',
        firstname: 'chaima',
        age: 23,
        cin: '87654321',
        job: 'CEO',
        path: 'assets/smiling-young-beautiful-girl-gesturing-hi-with-copy-space.jpg',
        isEmbauche: false
      },
      // Add the rest of the fake CVs...
    ];
  }
}
