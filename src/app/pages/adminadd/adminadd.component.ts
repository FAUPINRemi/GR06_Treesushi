import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-adminadd',
  templateUrl: './adminadd.component.html',
  styleUrls: ['./adminadd.component.css']
})
export class AdminaddComponent implements OnInit {
  menuForm: FormGroup = new FormGroup({});
  aliments = [
              { id: 1, nom: 'California Saumon Avocat' },
              { id: 2, nom: 'Sushi Saumon' },
              { id: 3, nom: 'Spring Avocat Cheese' },
              {id:4, nom: 'California pacific'},
              {id:5, nom:'Edamame/Salade de chou'},
              {id:6, nom:'Maki Salmon Roll'},
              {id:7, nom:'Spring Saumon Avocat'},
              {id:8, nom:'Maki Cheese Avocat'},
              {id:9, nom:'California Thon Cuit Avocat'},
              {id:10, nom:'Sushi Thon'},
              {id:11, nom:'California Thon Avocat'},
              {id:12, nom:'Sando Chicken Katsu'},
              {id:13, nom:'Sando Salmon Aburi'},
              {id:14, nom:'Maki Salmon'},
              {id:15, nom:'California Crevette'},
              {id:16, nom:'California Chicken Katsu'},
              {id:18, nom:'Spring tataki Saumon'},
              {id:19, nom:'Signature Dragon Roll'},
              {id:20, nom:'California French Touch'},
              {id:21, nom:'California French salmon'},
              {id:22, nom:'California Yellowtail Ponzu'},
              {id:23, nom:"Signature Rock'n Roll"},
              {id:24, nom:"Sushi Salmon"},
              {id:24, nom:"Sushi Saumon Tsukudani"},

              

            ];
  saveurs = [
    { id: 1, nom: 'Saumon' },
    { id: 2, nom: 'Avocat' },
    { id: 3, nom: 'cheese' },
    {id:4, nom: 'coriandre'},
    {id:5, nom:'thon'},
    {id:6, nom:'viande'},
    {id:7, nom:'crevette'},
    {id:8, nom:'spicy'},
    {id:9, nom:'seriole lalandi'}
];

  constructor(private fb: FormBuilder, private dataService: DataService) { }

  ngOnInit() {
    this.menuForm = this.fb.group({
      nom: '',
      img: '',
      pieces: '',
      prix: '',
      aliments: this.fb.array([]),
      saveurs: this.fb.array([])
    });

    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.aliments.map((o, i) => {
      const control = this.fb.control(false);
      (this.menuForm.controls['aliments'] as FormArray).push(control);
    });

    this.saveurs.map((o, i) => {
      const control = this.fb.control(false);
      (this.menuForm.controls['saveurs'] as FormArray).push(control);
    });
  }
  submit() {
    const selectedAlimentIds = this.menuForm.value.aliments
      .map((v: boolean, i: number) => v ? this.aliments[i].id : null)
      .filter((v: any) => v !== null)
      
  
    const selectedSaveurIds = this.menuForm.value.saveurs
      .map((v: boolean, i: number) => v ? this.saveurs[i].id : null)
      .filter((v: any) => v !== null)
      
  
    const data = {
      nom: this.menuForm.value.nom,
      img: this.menuForm.value.img,
      pieces: Number(this.menuForm.value.pieces),
      prix: Number(this.menuForm.value.prix),
      aliments: selectedAlimentIds,
      saveurs: selectedSaveurIds
    };

    console.log(data)
  
    this.dataService.createMenu(data).subscribe(
      res => {
        console.log(res);
        alert('Menu créé avec succès');
      },
      err => {
        console.error(err);
        alert('Menu non créé. Erreur : ' + err.message);
      }
    );
  }}