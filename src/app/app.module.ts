import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Importez FormsModule
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
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
import { OnemenuComponent } from './pages/onemenu/onemenu.component';
import { TraitementInscriptionComponent } from './pages/traitement-inscription/traitement-inscription.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminaddComponent } from './pages/adminadd/adminadd.component';
import { DetailboxComponent } from './pages/detailbox/detailbox.component';
import { CommandmenuComponent } from './pages/commandmenu/commandmenu.component';
import { TraitementcommandeComponent } from './pages/traitementcommande/traitementcommande.component';


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
    OnemenuComponent,
    TraitementInscriptionComponent,
    AdminaddComponent,
    DetailboxComponent,
    CommandmenuComponent,
    TraitementcommandeComponent
     ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, // N'oubliez pas d'ajouter FormsModule ici

    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
