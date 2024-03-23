import { Component } from '@angular/core';
import { DataService } from '../../data.service'; 

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  data: any;

  constructor(private dataService: DataService) { 
    this.dataService.getData().subscribe(data => {
      this.data = data;
    });
  }

  getQuantity(aliment: any) {
    return aliment['quantité'];
  }

}