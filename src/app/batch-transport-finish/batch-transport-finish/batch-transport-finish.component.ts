import { Component, OnInit } from '@angular/core';

import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { BatchTransportFinishService } from '../services/batch-transport-finish.service';
import { BatchTransportModel } from '../../shared/model/batchTransportModel';
import { Response } from '../../shared/model/response';

@Component({
  selector: 'app-batch-transport-finish',
  templateUrl: './batch-transport-finish.component.html',
  styleUrls: ['./batch-transport-finish.component.css']
})
export class BatchTransportFinishComponent implements OnInit {

  private batches: Array<BatchTransportModel>;

  constructor(private service: BatchTransportFinishService, public modal: Modal) { }

  ngOnInit() {
    this.service.list().subscribe(
      (batches: Array<BatchTransportModel>) => {
        this.filterBatches(batches);
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

  finishBatch(position: number) {
    this.service.finishBatch(this.batches[position].BatchTransportId).subscribe(
      (response: Response) => {
        const dialogRef = this.modal.alert()
          .size('sm')
          .showClose(true)
          .title('Success')
          .body('Transport finished!')
          .open();
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

  private filterBatches(batches: Array<BatchTransportModel>) {
    const username = localStorage.getItem('username');

    this.batches = batches.filter(function (batch) {
      return (batch.Carrier.Username == username && batch.FinishDate == null);
    })

    console.log(this.batches);
  }

}
