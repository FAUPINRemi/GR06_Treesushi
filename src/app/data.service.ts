import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://treesushi-api.000webhostapp.com/API/Controler/Menu/read.php');
  }

  createMenu(data: any) {
    return this.http.post('https://treesushi-api.000webhostapp.com/API/models/create.php', data);
  }
}