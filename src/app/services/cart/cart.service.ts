import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { Food } from '../../shared/models/Food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(food: Food){

  }
}
