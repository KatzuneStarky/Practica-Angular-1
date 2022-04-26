import { Component } from '@angular/core';
import { ShoppingCartService } from '../services/shoppin-cart.service';

@Component({
  selector: 'app-cart',
  template: `
    <ng-container
      *ngIf="{ total: total$ | async, quantity: quantity$ | async } as data"
    >
      <ng-container *ngIf="data.total">
        <mat-icon>add_shopping_carts</mat-icon>
        {{ data.total | currency }}
        ({{ data.quantity }})
      </ng-container>
    </ng-container>
  `,
})
export class CartComponent {
  quantity$ = this.shoppingCartSvc.quantityAction$;
  total$ = this.shoppingCartSvc.totalAction$;
  cart$ = this.shoppingCartSvc.cartAction$;
  constructor(private shoppingCartSvc: ShoppingCartService) {}
}
