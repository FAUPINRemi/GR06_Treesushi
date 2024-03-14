import { Component } from '@angular/core';
import { DataService } from '../../data.service'; 


@Component({
  selector: 'app-commandmenu',
  templateUrl: './commandmenu.component.html',
  styleUrl: './commandmenu.component.css'
})
export class CommandmenuComponent {
  data: any;
  cart: any[] = []; 

  addToCart(item: any) {
    const totalItems = this.cart.reduce((total, cartItem) => total + cartItem.quantity, 0);
    if (totalItems < 10) {
        const foundItem = this.cart.find((cartItem: any) => cartItem.nom === item.nom);
        if (foundItem) {
            foundItem.quantity += 1;
            foundItem.totalPrice = foundItem.quantity * foundItem.prix;
        } else {
            this.cart.push({...item, quantity: 1, totalPrice: item.prix});
        }
    } else {
        alert('10 boxs maximum par commande!');
    }
}
  removeFromCart(item: any) {
    const foundItem = this.cart.find(cartItem => cartItem.nom === item.nom);
    if (foundItem && foundItem.quantity > 1) {
      foundItem.quantity -= 1;
      foundItem.totalPrice = foundItem.quantity * foundItem.prix;
    } else {
      this.cart = this.cart.filter(cartItem => cartItem.nom !== item.nom);
    }
  }

  getTotalPrice() {
    return this.cart.reduce((total, item) => total + item.totalPrice, 0);
  }

  constructor(private dataService: DataService) { 
    console.log(this.dataService.getData());
    this.dataService.getData().subscribe(data => {
      this.data = data;
    });
  }

  getQuantity(aliment: any) {
    return aliment['quantité'];
  }

}
