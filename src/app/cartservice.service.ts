import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  private count: number = 0;

  constructor() { }


  incrementCount() {
    if (this.count < 10) { 
      this.count++;
    }
  
  }
deleteCount() {
    this.count = 0;
  }

  decrementCount() {
    this.count--;
  }
  getCount() {
    return this.count;
  }
}