import { Component, OnInit } from '@angular/core';

import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { Batch } from '../../shared/model/batch';
import { BatchesTransportService } from '../services/batches-transport.service';
import { BatchTransport } from '../../shared/model/batchTransport';
import { BatchId } from '../../shared/model/batchId';
import { Response } from '../../shared/model/response';

@Component({
  selector: 'batches-transport',
  templateUrl: './batches-transport.component.html',
  styleUrls: ['./batches-transport.component.css']
})
export class BatchesTransportComponent implements OnInit {

  private batches: Array<Batch>;
  private selected: Array<boolean> = [];

  constructor(private service: BatchesTransportService, public modal: Modal) { }

  ngOnInit() {
    this.service.list().subscribe(
      (batchesList: Array<Batch>) => {
        this.batches = batchesList;

        if (this.batches.length > 0) {
          this.selected.length = this.batches.length;
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
    )
  }

  startBatchesTransport() {
    this.service.startBatchesTranspot(this.getSelectedBatches()).subscribe(
      (response: Response) => {
        const dialogRef = this.modal.alert()
          .size('sm')
          .showClose(true)
          .title('Success')
          .body('Transport started successfully!')
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

  clearSelected() {
    for (var i = 0; i < this.selected.length; i++) {
      this.selected[i] = false;
    }
  }

  getSelectedBatches(): BatchTransport {
    var selectedIds: Array<BatchId> = [];

    for (var i = 0; i < this.selected.length; i++) {
      if (this.selected[i]) {
        selectedIds.push(new BatchId(this.batches[i].BatchId));
      }
    }

    return new BatchTransport(selectedIds);
  }
}
