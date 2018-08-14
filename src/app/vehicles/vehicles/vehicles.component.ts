import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { routerTransition } from '../../animations/fadein.animation';

import { Vehicle } from '../../shared/model/vehicle';
import { Batch } from '../../shared/model/batch';
import { Zone } from '../../shared/model/zone';
import { Response } from '../../shared/model/response';
import { VehiclesService } from '../services/vehicles.service';
import { BatchesService } from '../../batches/services/batches.service';
import { ZonesService } from '../../zones/services/zones.service';

@Component({
  selector: 'vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css'],
  animations: [routerTransition()],
  host: { '[@routerTransition]': '' }
})
export class VehiclesComponent implements OnInit {

  private vehiclesList: Array<Vehicle>;
  private batches: Array<Batch>;
  private subZones: Array<Zone> = [];
  private selected: Array<boolean> = [];
  private selectedZones: Array<boolean> = [];
  private selectedForSell: Array<boolean> = [];

  private showAddToBatch: boolean = false;
  private showMoveZone: boolean = false;
  private showSell: boolean = false;

  constructor(
    private vehicleService: VehiclesService,
    private batchesService: BatchesService,
    private zoneService: ZonesService,
    private route: ActivatedRoute,
    private router: Router,
    public modal: Modal
  ) { }

  ngOnInit() {
    const role = localStorage.getItem('role');

    this.showAddToBatch = role == 'Administrator' || role == 'PortOperator'
    this.showMoveZone = role == 'AreaOperator' || role == 'Administrator'
    this.showSell = role == 'Seller' || role == 'Administrator'

    this.vehicleService.list().subscribe(
      (vehiclesList: Array<Vehicle>) => {
        console.log(vehiclesList);
        this.vehiclesList = vehiclesList;

        if (this.vehiclesList.length > 0) {
          this.selected.length = this.vehiclesList.length;
          this.selectedZones.length = this.vehiclesList.length;
          this.selectedForSell.length = this.vehiclesList.length;
          this.clearSelected();
        }
      },
      error => {
        const dialogRef = this.modal.alert()
        .size('sm')
        .showClose(true)
        .title('Error')
        .body(error)
        .open();
      }
    );

    this.checkBatches();
    this.checkZones();
  }

  checkBatches() {
    if (this.showAddToBatch) {
      this.batchesService.list().subscribe(
        (batches: Array<Batch>) => {
          this.batches = batches;
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
  }

  checkZones() {
    if (this.showMoveZone) {
      this.zoneService.list().subscribe(
        (zones: Array<Zone>) => {
          for (var i = 0; i < zones.length; i++) {
            var zone = zones[i];
            var subZones = zones[i].SubZones;

            for (var j = 0; j < subZones.length; j++) {
              subZones[j].ParentName = zone.Name;
            }

            this.subZones.push(...subZones);
          }
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
  }

  moveVehiclesToZone(zoneId: any) {
    const vehicleIds: Array<number> = [];

    for (var i = 0; i < this.selectedZones.length; i++) {
      if (this.selectedZones[i]) {
        vehicleIds.push(this.vehiclesList[i].VehicleId);
      }
    }

    if (vehicleIds.length > 0) {
      this.zoneService.moveVehiclesToZone(zoneId, vehicleIds).subscribe(
        (response: Response) => {
          window.location.reload();
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
  }

  addVehiclesToBatch(batchId: number) {
    const vehicleIds: Array<number> = [];

    for (var i = 0; i < this.selected.length; i++) {
      if (this.selected[i]) {
        vehicleIds.push(this.vehiclesList[i].VehicleId);
      }
    }

    if (vehicleIds.length > 0) {
      this.batchesService.addVehiclesToBatch(batchId, vehicleIds).subscribe(
        (response: Response) => {
          const dialogRef = this.modal.alert()
            .size('sm')
            .showClose(true)
            .title('Success')
            .body('Vehicles succesfully added into batch!')
            .open();
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
  }

  private clearSelected() {
    for (var i = 0; i < this.selected.length; i++) {
      this.selected[i] = false;
      this.selectedZones[i] = false;
      this.selectedForSell[i] = false;
    }
  }

  sellCar(vehicleId: number) {
    localStorage.setItem('vehicleSell', vehicleId.toString());
    this.router.navigate(['sellCar']);
  }

  goToInspection(vehicle: Vehicle) {
    this.router.navigate(['inspections', vehicle.VehicleId]);
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
