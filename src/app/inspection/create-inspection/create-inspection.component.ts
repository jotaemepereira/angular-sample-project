import { Component, OnInit } from '@angular/core';

import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { InspectionService } from '../services/inspection.service'
import { Response } from '../../shared/model/response';

@Component({
  selector: 'app-create-inspection',
  templateUrl: './create-inspection.component.html',
  styleUrls: ['./create-inspection.component.css']
})
export class CreateInspectionComponent implements OnInit {

  private fieldArray: Array<any> = [];
  private newAttribute: any = {};
  private image;

  constructor(private inspectionService: InspectionService, public modal: Modal) { }

  ngOnInit() {
    var damages = JSON.parse(localStorage.getItem('damages'));

    if (damages === null) {

    } else {
      console.log(damages);

      for (var i = 0; i < damages.length; i++) {
        this.newAttribute = {code: damages[i].DamageUrl, name: damages[i].Description}
        console.log(this.newAttribute);
        this.fieldArray.push(this.newAttribute);
      }
    }
  }

  addFieldValue() {
    this.fieldArray.push(this.newAttribute)
    this.newAttribute = {};
  }

  deleteFieldValue(index) {
    this.fieldArray.splice(index, 1)
  }

  changeListener($event) : void {
    this.readThis($event.target)
  }

  readThis(inputValue: any): void {
    var file:File = inputValue.files[0];
    var myReader:FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.image = myReader.result;
      this.newAttribute.code = this.image;
    }

    myReader.readAsDataURL(file);
  }

  submitInspection() {
    const vehicleId = localStorage.getItem('vehicle');

    this.inspectionService.createInspection(vehicleId, this.fieldArray).subscribe(
      (response: Response) => {
        const dialogRef = this.modal.alert()
          .size('sm')
          .showClose(true)
          .title('Success')
          .body('Inspection created!')
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
