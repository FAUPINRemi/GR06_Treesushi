import { Component } from '@angular/core';
import Aos from 'aos';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
  slides = [
    {image: '../../../assets/ressources/img/accueil_img/interieur1.jpg', title: 'Notre restaurant', text: '🍣 Découvrez notre restaurant de sushi à Meaux et plongez dans une expérience culinaire authentique et pratique ! Avec notre système de restauration à emporter savourez nos délicieux plats où que vous soyez. Notre équipe dévouée prépare chaque commande avec soin en utilisant des ingrédients frais et de qualité supérieure pour garantir une explosion de saveurs à chaque bouchée. Que vous soyez chez vous, au bureau ou en déplacement notre menu varié et nos créations savoureuses sauront combler vos envies de cuisine japonaise. Rejoignez-nous pour une expérience culinaire inoubliable chez Treesushi ! 🎉 '},
    {image: '../../../assets/ressources/img/accueil_img/interieur2.jpg', title: 'Horaires', text: ' Nous sommes ouverts du lundi au vendredi de 11h à 13h et de 18h à 22h. Et le samedi 11h à 13h et de 18h à 23h pour répondre à vos envies de délices japonais. Plongez dans notre buffet à volonté où vous pourrez déguster à volonté une sélection exquise de sushis, sashimis, rolls et bien plus encore. Nos spécialités comme nos Rolls Spéciaux au saumon croustillant et avocat ainsi que nos Sashimis de thon frais sont préparées avec soin par nos chefs talentueux.  Et noubliez pas nos produits phares : les boxs de sushi, parfaits pour une expérience à emporter rapide et délicieuse. Chez Treesushi, nous sommes là pour vous offrir une expérience culinaire japonaise inoubliable où que vous soyez !     '}
  ];
  currentSlide = 0;

  prevSlide() {
    this.currentSlide = (this.currentSlide > 0) ? this.currentSlide - 1 : this.slides.length - 1;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide < this.slides.length - 1) ? this.currentSlide + 1 : 0;
  }

  ngOnInit() {
    Aos.init({
      once: true, 
    });
  }}