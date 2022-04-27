import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThankUComponent } from './thank-u.component';

const routes: Routes = [{ path: '', component: ThankUComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThankURoutingModule { }
