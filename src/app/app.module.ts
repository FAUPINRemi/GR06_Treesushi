import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
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
import { TraitementcommandeComponent } from './pages/traitementcommande/traitementcommande.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminaddComponent } from './pages/adminadd/adminadd.component';
import { DetailboxComponent } from './pages/detailbox/detailbox.component';
import { CommandmenuComponent } from './pages/commandmenu/commandmenu.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { TraitementProfilComponent } from './pages/traitement-profil/traitement-profil.component';
import { CommonModule } from '@angular/common';
import { ProfilTraitementComponent } from './pages/profil-traitement/profil-traitement.component';
import { VoirCommandeComponent } from './pages/voir-commande/voir-commande.component';
import { MenuadminComponent } from './pages/menuadmin/menuadmin.component';


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
    TraitementcommandeComponent,
    ProfilComponent,
    TraitementProfilComponent,
    ProfilTraitementComponent,
    VoirCommandeComponent,
    MenuadminComponent,
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    FormsModule, 
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
