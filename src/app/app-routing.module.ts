import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AproposComponent } from './pages/apropos/apropos.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AccueilComponent } from './pages/accueil/accueil.component'; 
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { MenuaespComponent } from './pages/menuaesp/menuaesp.component';
import { FormconnexionComponent } from './pages/formconnexion/formconnexion.component';
import { ForminscriptionComponent } from './pages/forminscription/forminscription.component';
import { TraitementInscriptionComponent } from './pages/traitement-inscription/traitement-inscription.component';
const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: AccueilComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'a-propos', component: AproposComponent },
  { path: 'menu-choix', component: MenuaespComponent },
  { path: 'connexion', component: FormconnexionComponent },
  { path: 'inscription', component: ForminscriptionComponent },
  { path: 'traitementinscription', component: TraitementInscriptionComponent},
  { path: '404', component: ErrorPageComponent },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }