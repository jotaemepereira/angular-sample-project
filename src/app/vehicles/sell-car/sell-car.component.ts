import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { VehiclesService } from '../services/vehicles.service';
import { Response } from '../../shared/model/response';

@Component({
  selector: 'app-sell-car',
  templateUrl: './sell-car.component.html',
  styleUrls: ['./sell-car.component.css']
})
export class SellCarComponent implements OnInit {

  private buyerName: string;
  private buyerPhone: string;
  private price: string;

  constructor(
    private service: VehiclesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSell() {
    const vehicleId = localStorage.getItem('vehicleSell');

    this.service.sellCar(vehicleId, this.buyerName, this.buyerPhone, this.price).subscribe(
      (response: Response) => {
        this.router.navigate(['vehicles']);
      },
      error => {
        console.log(error);
      }
    );
  }

}
