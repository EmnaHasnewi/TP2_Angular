import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Importer FormsModule
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvComponent } from './cv/cv.component';
import { ListeComponent } from './cv/liste/liste.component';
import { ItemComponent } from './cv/item/item.component';
import { DetailComponent } from './cv/detail/detail.component';
import { HeaderComponent } from './header/header.component';
import { DefaultImagePipe } from './default-image.pipe';
import { CvService } from './services/cv.service';
import { EmbaucheService } from './services/embauche.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ListeEmbauchesComponent } from './cv/liste-embauches/liste-embauches.component';
import { DetailCvComponent } from './detail-cv/detail-cv.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthComponent } from './auth/auth.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { ImagesComponent } from './images/images.component';
@NgModule({
  declarations: [
    AppComponent,
    CvComponent,
    ListeComponent,
    ItemComponent,
    DetailComponent,
    HeaderComponent,
    DefaultImagePipe,
    ListeEmbauchesComponent,
    DetailCvComponent,
    AuthComponent,
    ImageSliderComponent,
    ImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Add it here
    ReactiveFormsModule, // Ajouter ReactiveFormsModule ici
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule ,
    FlexLayoutModule,
    BrowserAnimationsModule,  // Importer BrowserAnimationsModule
    ToastrModule.forRoot()  // Configurer ToastrModule

  ],
  providers: [
    provideClientHydration(),
    CvService,EmbaucheService,EmbaucheService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
