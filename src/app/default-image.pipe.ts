import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultImage'
})
export class DefaultImagePipe implements PipeTransform {

  transform(value: string, defaultImagePath: string = 'assets/default_image.png'): string {
    // Vérifie si la valeur est une chaîne vide ou ne contient que des espaces
    return value.trim().length ? value : defaultImagePath;
}}