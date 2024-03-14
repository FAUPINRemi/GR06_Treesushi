import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms'; // Importez FormsModule

=======
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
>>>>>>> 4cf9175c047bdbcb712787a9dd3840279902e57a
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { MenuComponent } from './pages/menu/menu.component';
import { FooterComponent } from './component/footer/footer.component';
import { MenuaespComponent } from './pages/menuaesp/menuaesp.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormconnexionComponent } from './pages/formconnexion/formconnexion.component';
import { ForminscriptionComponent } from './pages/forminscription/forminscription.component';
<<<<<<< HEAD
import { TraitementInscriptionComponent } from './pages/traitement-inscription/traitement-inscription.component';

=======
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AdminaddComponent } from './pages/adminadd/adminadd.component';
import { DetailboxComponent } from './pages/detailbox/detailbox.component';
import { CommandmenuComponent } from './pages/commandmenu/commandmenu.component';
<<<<<<< HEAD

=======
>>>>>>> 4cf9175c047bdbcb712787a9dd3840279902e57a
>>>>>>> a6a01a922cd87edfe746cfe2f1ddc8ad071e4200
@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent,
    AccueilComponent,
    AproposComponent,
    MenuComponent,
    FooterComponent,
    MenuaespComponent,
    ErrorPageComponent,
    FormconnexionComponent,
    ForminscriptionComponent,
<<<<<<< HEAD
    TraitementInscriptionComponent,
=======
    AdminaddComponent,
    DetailboxComponent,
    CommandmenuComponent
   
>>>>>>> 4cf9175c047bdbcb712787a9dd3840279902e57a
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    FormsModule, // N'oubliez pas d'ajouter FormsModule ici
=======
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    FormsModule


>>>>>>> 4cf9175c047bdbcb712787a9dd3840279902e57a
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
