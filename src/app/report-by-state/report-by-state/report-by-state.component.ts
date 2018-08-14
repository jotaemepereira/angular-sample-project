import { Component, OnInit } from '@angular/core';
import { Modal } from 'ngx-modialog/plugins/bootstrap';

import { ReportByStateService } from '../services/report-by-state.service';
import { VehicleGroupedByState } from '../../shared/model/vehicleGroupedByState';
import { Vehicle } from '../../shared/model/vehicle';

@Component({
  selector: 'app-report-by-state',
  templateUrl: './report-by-state.component.html',
  styleUrls: ['./report-by-state.component.css']
})
export class ReportByStateComponent implements OnInit {

  private waitingInPort: Array<Vehicle>;
  private readyToShip: Array<Vehicle>;
  private inTransit: Array<Vehicle>;
  private waitingInArea: Array<Vehicle>;
  private readyToSell: Array<Vehicle>;
  private sold: Array<Vehicle>;

  constructor(private reportService: ReportByStateService, public modal: Modal) { }

  ngOnInit() {
    this.reportService.loadVehiclesByState().subscribe(
      (vehiclesGroupedByState: VehicleGroupedByState) => {
        this.waitingInPort = vehiclesGroupedByState.WaitingInPort;
        this.readyToShip = vehiclesGroupedByState.ReadyToShip;
        this.inTransit = vehiclesGroupedByState.InTransit;
        this.waitingInArea = vehiclesGroupedByState.WaitingInArea;
        this.sold = vehiclesGroupedByState.Sold;
      },
      error => {
        const dialogRef = this.modal.alert()
          .size('sm')
          .showClose(true)
          .title('Error')
          .body(error)
          .open();
      }
    )
  }

  getStatus(state: number): string {
    switch(state) {
      case 0: return "In Port";
      case 1: return "Ready to ship";
      case 2: return "In transport";
      case 3: return "Waiting in area";
      case 4: return "In area";
      case 5: return "Ready to sell";
      case 6: return "Sold"
      default: return "ERROR";
    }
  }

}
