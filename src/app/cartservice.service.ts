import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  private count: number = 0;

  constructor() { }


  incrementCount() {
    this.count++;
  }

  decrementCount() {
    this.count--;
  }
  getCount() {
    return this.count;
  }
}