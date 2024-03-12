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
  aliments = ['Aliment 1', 'Aliment 2', 'Aliment 3'];
  saveurs = ['Saveur 1', 'Saveur 2', 'Saveur 3'];

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
      .map((v: boolean, i: number) => v ? this.aliments[i] : null)
      .filter((v: any) => v !== null);
  
    const selectedSaveurIds = this.menuForm.value.saveurs
      .map((v: boolean, i: number) => v ? this.saveurs[i] : null)
      .filter((v: any) => v !== null);
  
    const data = {
      nom: this.menuForm.value.nom,
      img: this.menuForm.value.img,
      pieces: this.menuForm.value.pieces,
      prix: this.menuForm.value.prix,
      aliments: selectedAlimentIds,
      saveurs: selectedSaveurIds
    };
  
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