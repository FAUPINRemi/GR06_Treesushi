import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './pages/apropos/apropos.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AccueilComponent } from './pages/accueil/accueil.component'; 
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { MenuaespComponent } from './pages/menuaesp/menuaesp.component';
import { FormconnexionComponent } from './pages/formconnexion/formconnexion.component';
import { ForminscriptionComponent } from './pages/forminscription/forminscription.component';
import { OnemenuComponent } from './pages/onemenu/onemenu.component';
import { TraitementInscriptionComponent } from './pages/traitement-inscription/traitement-inscription.component';
import { AdminaddComponent } from './pages/adminadd/adminadd.component';
import { DetailboxComponent } from './pages/detailbox/detailbox.component';
import { CommandmenuComponent } from './pages/commandmenu/commandmenu.component';
import { TraitementcommandeComponent } from './pages/traitementcommande/traitementcommande.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { TraitementProfilComponent } from './pages/traitement-profil/traitement-profil.component'; 
import { ProfilTraitementComponent } from './pages/profil-traitement/profil-traitement.component';
import { VoirCommandeComponent } from './pages/voir-commande/voir-commande.component';
import { MenuadminComponent } from './pages/menuadmin/menuadmin.component';


const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'a-propos', component: AproposComponent },
  { path: 'menu-choix', component: MenuaespComponent },
  { path: 'connexion', component: FormconnexionComponent },
  { path: 'inscription', component: ForminscriptionComponent },
  { path: 'recapinscription', component: TraitementInscriptionComponent},
  { path: 'adminadd', component: AdminaddComponent },
  { path: '404', component: ErrorPageComponent },
  { path: 'onemenu', component: OnemenuComponent },
  { path: 'onemenu/:id', component: OnemenuComponent },
  { path: 'detailbox', component: DetailboxComponent },
  { path: 'commandmenu', component: CommandmenuComponent },
  { path: 'recapcommande', component: TraitementcommandeComponent},
  {path: 'profil', component: ProfilComponent},
  {path : 'traitement-profil', component: TraitementProfilComponent},
  {path : 'profil-message', component: ProfilTraitementComponent},
  {path : 'voir_commande', component: VoirCommandeComponent },
{ path : 'menuadmin', component: MenuadminComponent},
  { path: '**', redirectTo: '404' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }