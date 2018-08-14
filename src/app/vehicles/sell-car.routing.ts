import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellCarComponent } from './sell-car/sell-car.component';

const routes: Routes = [
  {
    path: '',
    component: SellCarComponent,
    children: [
      {
        path: '',
        component: SellCarComponent,
        data: {
          title: 'Sell car'
        },
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellCarRouting { }
