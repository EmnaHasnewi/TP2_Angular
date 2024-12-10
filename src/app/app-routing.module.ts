import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { DetailCvComponent } from './detail-cv/detail-cv.component';
import { AuthComponent } from './auth/auth.component';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  { path: 'cv', component: CvComponent },  // Accueil par défaut
  { path: 'cv/:id', component: DetailCvComponent }, // Détail d'un CV
   {path: 'login', component:AuthComponent},
   {path: 'images', component:ImagesComponent},
{path: 'home', redirectTo: 'cv'},
  //{ path: '*', component: CvComponent },  // Accueil par défaut

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
