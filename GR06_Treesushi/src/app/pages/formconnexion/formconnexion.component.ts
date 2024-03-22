import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';


@Component({
  selector: 'app-formconnexion',
  templateUrl: './formconnexion.component.html',
  styleUrls: ['./formconnexion.component.css']
})
export class FormconnexionComponent {
  constructor(private authService: AuthService, private router: Router) {}

  connexion(connexionForm: any): void {
    const email = connexionForm.email;
    const password = connexionForm.password;

    
    this.authService.login(email, password);


    this.router.navigate(['/accueil']);
  }
}
