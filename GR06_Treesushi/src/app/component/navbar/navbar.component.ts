import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartserviceService } from '../../cartservice.service'; 
import { AuthService } from '../../auth.service'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  menuVisible = false;
  isLoggedIn = false;

  constructor(
    private router: Router,
    public cartService: CartserviceService,
    private authService: AuthService 
  ) {}

  ngOnInit(): void {
    this.authService.isLoggedIn$.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  closeMenu() {
    this.menuVisible = false;
  }

  isMenuPage(): boolean {
    return this.router.url === '/menu-choix';
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/accueil']);
  }

  goToCart() {
    if (this.isLoggedIn) {
      this.router.navigate(['/voir_commande']);
    } else {
      this.router.navigate(['/connexion']);
    }
  }
}
