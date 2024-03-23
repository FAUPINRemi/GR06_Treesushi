import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-traitementcommande',
  templateUrl: './traitementcommande.component.html',
  styleUrls: ['./traitementcommande.component.css']
})
export class TraitementcommandeComponent implements OnInit {
  
  cart: any[] = []; 

  ngOnInit(): void {
    const cartData = localStorage.getItem('cart');
    console.log(cartData); 
    if (cartData) {
      this.cart = JSON.parse(cartData);
    }
    console.log(this.cart); 
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, item) => total + item.totalPrice, 0);
  }

  constructor(private dataService: DataService, private router: Router) {
    this.dataService.getData().subscribe(data => {
      
    });
  }

  confirmAbandon(): void {
    const userConfirmed = confirm('Êtes-vous sûr de vouloir abandonner ?');
    if (userConfirmed) {
      this.router.navigate(['/']); 
    }
  }

}
