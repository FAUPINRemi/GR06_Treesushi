import { Component } from '@angular/core';
import { DataService } from '../../data.service'; 
import { CartserviceService } from '../../cartservice.service'; 

@Component({
  selector: 'app-commandmenu',
  templateUrl: './commandmenu.component.html',
  styleUrls: ['./commandmenu.component.css']
})
export class CommandmenuComponent {
  data: any;
  cart: any[] = []; 

  constructor(private dataService: DataService, private cartService: CartserviceService) { 
    this.dataService.getData().subscribe(data => {
      this.data = data;
    });
  }

  addToCart(item: any) {
    this.cartService.incrementCount(); 
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
    this.cartService.decrementCount();
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

  clearCart() {
    this.cart = []; 
    this.cartService.deleteCount();
  }

  getQuantity(aliment: any) {
    return aliment['quantité'];
  }

  saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  validerCommande() {
    
    this.saveCartToLocalStorage();
    
    window.location.href = '/recapcommande';
  }

  
}
