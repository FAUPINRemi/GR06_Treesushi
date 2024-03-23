import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-traitement-profil',
  templateUrl: './traitement-profil.component.html',
  styleUrl: './traitement-profil.component.css'
})
export class TraitementProfilComponent {
  constructor(private router: Router) { } 

  modification(ModifForm: NgForm): void {
    if (ModifForm && ModifForm.valid) {
        const { civilité, prénom, nom, adresse, ville, code_postal, téléphone, email } = ModifForm.value;

      if (civilité && prénom && nom && adresse && ville && code_postal && téléphone && email) {
        localStorage.setItem('civilité', civilité);
        localStorage.setItem('prénom', prénom);
        localStorage.setItem('nom', nom);
        localStorage.setItem('adresse', adresse);
        localStorage.setItem('ville', ville);
        localStorage.setItem('code_postal', code_postal);
        localStorage.setItem('téléphone', téléphone);
        localStorage.setItem('email', email);

        console.log('Données stockées avec succès dans le localStorage');

      
        this.router.navigate(['/profil-message']);
      } else {
        console.log('Veuillez remplir tous les champs du formulaire');
      }
    } else {
      console.log('Le formulaire est invalide');
    }
  }

  changer(): void {
    const passwordField = document.getElementById("password") as HTMLInputElement;
    const eyeIcon = document.getElementById("oeil") as HTMLImageElement;

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.src = "../../../assets/ressources/icon/oeil_fermé noir.png";
    } else {
        passwordField.type = "password";
        eyeIcon.src = "../../../assets/ressources/icon/oeil_ouvert noir.png";
    }
  }
}

