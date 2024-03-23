import { Component } from '@angular/core';
import { DataService } from '../../data.service'; 

@Component({
  selector: 'app-menuadmin',
  templateUrl: './menuadmin.component.html',
  styleUrl: './menuadmin.component.css'
})
export class MenuadminComponent {
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
