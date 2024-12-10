import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService, Cv } from '../services/cv.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent {
  cv: Cv | undefined;
  changeDetector: any;

  constructor(
    private cvService: CvService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}
  
  ngOnInit(): void {
    const id = this.route.snapshot.params['id']; // Get the ID from the URL
    console.log('Fetching CV with ID:', id);
    this.cvService.getCvById(Number(id)).subscribe((cv) => {
      this.cv = cv;
      console.log('CV fetched:', this.cv);
    });
  }

  deleteCv(): void {
    if (this.cv) {
      console.log('Attempting to delete CV with ID:', this.cv.id);
      this.cvService.deleteCv(this.cv.id).subscribe({
        next: () => {
        },
        error: (err) => {
          console.error('Deletion failed:', err);
        },
      });
      this.router.navigate(['cv']);
      this.toastr.success('CV supprimé avec succès!', 'Succès');
    } else {
      console.error('No CV to delete.');
      this.toastr.warning('CV non supprimé !', 'warning');

    }
  }
  
  
  
}
