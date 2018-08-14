import { Component, OnInit } from '@angular/core';

import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';

import { ReportByStateService } from '../services/report-by-state.service';
import { ReportByVin } from '../../shared/model/reportByVin';

@Component({
  selector: 'app-report-by-vin',
  templateUrl: './report-by-vin.component.html',
  styleUrls: ['./report-by-vin.component.css']
})
export class ReportByVinComponent implements OnInit {

  private vin: string = "";
  private reports: Array<ReportByVin> = [];

  constructor(private service: ReportByStateService, public modal: Modal) { }

  ngOnInit() { }

  searchByVin() {
    this.service.searchByVin(this.vin).subscribe(
      (reports: Array<ReportByVin>) => {
        this.reports = reports;
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
