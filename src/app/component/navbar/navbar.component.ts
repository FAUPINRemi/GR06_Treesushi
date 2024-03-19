import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartserviceService } from '../../cartservice.service'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuVisible = false;

  constructor(private router: Router, public cartService: CartserviceService) { } // Déclarez cartService comme une variable publique

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  closeMenu() {
    this.menuVisible = false;
  }

  isMenuPage(): boolean {
    return this.router.url === '/menu-choix';
  }
  
}