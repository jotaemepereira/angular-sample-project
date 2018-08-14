import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { Inspection } from '../../shared/model/inspection'
import { Vehicle } from '../../shared/model/vehicle'
import { Damage } from '../../shared/model/damage'
import { InspectionService } from '../services/inspection.service'

@Component({
  selector: 'inspection',
  templateUrl: './inspection.component.html',
  styleUrls: ['./inspection.component.css']
})
export class InspectionComponent implements OnInit {

  private inspectionList: Array<Inspection>;
  private vehicle: Vehicle;
  private selectedVehicle: string = ""
  private expanded: Array<boolean> = [];

  constructor(private inspectionService: InspectionService, private route: ActivatedRoute, private router: Router, public modal: Modal) {
    this.selectedVehicle = '';
    this.route.children[0].params.subscribe((params: Params) => {
      this.selectedVehicle = params['id'];
    });
  }

  ngOnInit() {
    localStorage.removeItem('damages');

    this.inspectionService.getInspections(this.selectedVehicle).subscribe(
      (vehicle: Vehicle) => {
        this.vehicle = vehicle;
        this.inspectionList = vehicle.Inspections;

        for (var i=0; i < this.inspectionList.length; i++) {
          var inspection = this.inspectionList[i]

          for (var j=0; j < inspection.Damages.length; j++) {
            var damage = inspection.Damages[j];
            console.log(damage);
            damage.DamageUrl = damage.Images[0].Image;
          }
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

  showDamages(i: number): void {
    this.expanded[i] = !this.expanded[i];
  }

  createInspection() {
    localStorage.setItem('vehicle', this.vehicle.VehicleId.toString());
    var damages: Array<Damage> = [];

    for (var i=0; i < this.inspectionList.length; i++) {
      damages.push(...this.inspectionList[i].Damages);
    }

    localStorage.setItem('damages', JSON.stringify(damages));
    this.router.navigate(['createInspection']);
  }

}
