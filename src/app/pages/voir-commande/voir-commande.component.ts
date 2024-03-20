import { Component } from '@angular/core';

@Component({
  selector: 'app-voir-commande',
  templateUrl: './voir-commande.component.html',
  styleUrl: './voir-commande.component.css'
})
export class VoirCommandeComponent {
  
  civilite: string | null = null;

  ngOnInit(): void {
    this.civilite = localStorage.getItem('cart');
  }
}