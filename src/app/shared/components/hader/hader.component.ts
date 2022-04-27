import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hader',
  template: `
    <mat-toolbar color="primary">
      <a [routerLink]="['/']">
        <span>Store Angular</span>
      </a>
      <span class="spacer"></span>
      <app-cart class="mouseHover" (click)="goToCheckout()"></app-cart>
    </mat-toolbar>
  `,
  styleUrls: ['./hader.component.scss'],
})
export class HaderComponent {
  constructor(private router: Router) {}
  goToCheckout(): void {
    this.router.navigate(['/checkout']);
  }
}
