import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Overlay } from 'ngx-modialog';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { BatchesService } from '../services/batches.service';
import { Response } from '../../shared/model/response';

@Component({
  selector: 'app-create-batch',
  templateUrl: './create-batch.component.html',
  styleUrls: ['./create-batch.component.css']
})
export class CreateBatchComponent implements OnInit {

  private name: string;
  private description: string;

  constructor(private batchService: BatchesService, private route: ActivatedRoute, private router: Router, public modal: Modal) { }

  ngOnInit() {
  }

  onSubmit() {
    this.batchService.createBatch(this.name, this.description).subscribe(
      (response: Response) => {
        this.router.navigate(['batches']);
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
