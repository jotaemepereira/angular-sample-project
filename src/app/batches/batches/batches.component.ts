import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { Batch } from '../../shared/model/batch';
import { BatchesService } from '../services/batches.service';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css']
})
export class BatchesComponent implements OnInit {

  private batches: Array<Batch>;
  private expanded: Array<boolean> = [];
  private isCarrier = false;

  constructor(private batchService: BatchesService, private route: ActivatedRoute, private router: Router, public modal: Modal) { }

  ngOnInit() {
    const role = localStorage.getItem('role');

    this.isCarrier = role == 'Carrier';

    this.batchService.list().subscribe(
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
    );
  }

  showVehicles(i: number): void {
    this.expanded[i] = !this.expanded[i];
  }

  createBatch() {
    this.router.navigate(['createBatch']);
  }

}
