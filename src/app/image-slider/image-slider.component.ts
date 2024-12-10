import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.css']
})
export class ImageSliderComponent implements OnInit {
  @Input() images: string[] = []; // Liste des images
  @Input() intervalTime: number = 2000; // Temps entre chaque image (en ms)
  @Input() imageSize: { width: string; height: string } = { width: '300px', height: '200px' }; // Taille de l'image

  currentImage$!: Observable<string>; // Observable pour l'image actuelle

  ngOnInit(): void {
    if (this.images.length === 0) {
      console.error('ImageSliderComponent: La liste des images est vide.');
      return;
    }

    // Création de l'Observable pour faire défiler les images
    this.currentImage$ = interval(this.intervalTime).pipe(
      map(index => this.images[index % this.images.length]) // Boucler sur les images
    );
  }
}
