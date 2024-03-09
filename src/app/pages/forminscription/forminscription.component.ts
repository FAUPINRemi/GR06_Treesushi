import { Component } from '@angular/core';

@Component({
  selector: 'app-forminscription',
  templateUrl: './forminscription.component.html',
  styleUrls: ['./forminscription.component.css']
})
export class ForminscriptionComponent {

  changer(): void {
    const passwordField = document.getElementById("password") as HTMLInputElement;
    const eyeIcon = document.getElementById("oeil") as HTMLImageElement;

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.src = "../../../assets/ressources/icon/oeil.png"; 
    } else {
        passwordField.type = "password";
        eyeIcon.src = "../../../assets/ressources/icon/oeil_ouvert.png"; 
    }
  }
}