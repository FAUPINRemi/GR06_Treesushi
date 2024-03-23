import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
}) 

export class DataService {
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://localhost/GR06_Treesushi/src/API/Controler/Menu/read.php');
  }

  
  getOneData(id: any){
    return this.http.get(`https://treesushi-api.000webhostapp.com/API/Controler/Menu/read_One.php${id}`)
  }


  createMenu(data: any) {
    data.aliments = data.aliments.map(Number);
    data.saveurs = data.saveurs.map(Number);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post('http://localhost/GR06_Treesushi/src/API/Controler/Menu/create.php', data, { headers });
  }

  deleteMenu(id: number): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id: id
      },
    };
  
    return this.http.delete('http://localhost/htdocs/SAE401/GR06_Treesushi/src/API/Controler/Menu/delete.php', options);
  }

}


