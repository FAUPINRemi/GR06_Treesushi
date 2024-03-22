import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traitement-inscription',
  templateUrl: './traitement-inscription.component.html',
  styleUrls: ['./traitement-inscription.component.css']
})
export class TraitementInscriptionComponent implements OnInit {
  civilite: string | null = null;
  prenom: string | null = null;
  nom: string | null = null;
  adresse: string | null = null;
  ville: string | null = null;
  codePostal: string | null = null; 
  telephone: string | null = null; 
  email: string | null = null;

  ngOnInit(): void {
    this.civilite = localStorage.getItem('civilité');
    this.prenom = localStorage.getItem('prénom');
    this.nom = localStorage.getItem('nom');
    this.adresse = localStorage.getItem('adresse');
    this.ville = localStorage.getItem('ville');
    this.codePostal = localStorage.getItem('code_postal'); 
    this.telephone = localStorage.getItem('téléphone'); 
    this.email = localStorage.getItem('email');
    
  }
}
