// traitementcommande.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traitementcommande',
  templateUrl: './traitementcommande.component.html',
  styleUrls: ['./traitementcommande.component.css']
})
export class TraitementcommandeComponent implements OnInit {
  
  cart: any[] = []; 

  constructor() { }

  ngOnInit(): void {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
      this.cart = JSON.parse(cartData);
    }
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + item.totalPrice, 0);
  }
}
