import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-onemenu',
  templateUrl: './onemenu.component.html',
  styleUrls: ['./onemenu.component.css']
})
export class OnemenuComponent implements OnInit {
  menu: any;
  aliments: any[] = [];
  saveurs: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.dataService.getOneData(params['id']).subscribe((data: any) => {
        console.log(data);
        this.menu = data;
        this.aliments = data.aliment; 
        this.saveurs = data.saveur; 
      });
    });
  }
}