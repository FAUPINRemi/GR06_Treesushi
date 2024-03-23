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
  
  deleteMenu(id: number) {
    console.log(id)
    this.dataService.deleteMenu(id).subscribe(() => {
      this.data = this.data.filter((menu: { id: number; }) => menu.id !== id);
    });
  }
  
}
