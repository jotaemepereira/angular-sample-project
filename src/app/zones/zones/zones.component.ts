import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Modal } from 'ngx-modialog/plugins/bootstrap';

import { Zone } from '../../shared/model/zone';
import { ZonesService } from '../services/zones.service';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.css']
})
export class ZonesComponent implements OnInit {

  private zones: Array<Zone>;
  private expanded: Array<boolean> = [];

  constructor(private zoneService: ZonesService, private route: ActivatedRoute, private router: Router, public modal: Modal) { }

  ngOnInit() {
    this.zoneService.list().subscribe(
      (zones: Array<Zone>) => {
        this.zones = zones;
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

  showSubZones(i: number): void {
    this.expanded[i] = !this.expanded[i];
  }

}
