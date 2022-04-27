import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThankURoutingModule } from './thank-u-routing.module';
import { ThankUComponent } from './thank-u.component';


@NgModule({
  declarations: [
    ThankUComponent
  ],
  imports: [
    CommonModule,
    ThankURoutingModule
  ]
})
export class ThankUModule { }
