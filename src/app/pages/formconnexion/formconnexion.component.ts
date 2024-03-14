import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formconnexion',
  templateUrl: './formconnexion.component.html',
  styleUrls: ['./formconnexion.component.css']
})
export class FormconnexionComponent {
  constructor(private router: Router) {}

  connexion(connexionForm: any): void {
    const email = connexionForm.email;
    const password = connexionForm.password;

    
    const storedEmail = localStorage.getItem('email');
    if (email !== storedEmail) {
      console.log('Email ou Mot de passe incorrect.');
      return;
    }

    
    this.router.navigate(['/accueil']);
  }
}
