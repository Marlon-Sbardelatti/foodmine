import { CardItem } from "./CartItem";

export class Cart{
  items: CardItem[] = [];

  get totalPrice(): number {
    let total: number = 0;

    for (const item of this.items) {
     total += item.price
    }

    return total;
  }
}
