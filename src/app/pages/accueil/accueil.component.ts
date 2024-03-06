import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  ngAfterViewInit() {
    AOS.init();
  }
  
}


