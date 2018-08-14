import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute, NavigationEnd } from '@angular/router';
import 'rxjs/add/operator/filter';

import { ApiService } from '../shared/api/api.service'
import { RolesValidator } from '../shared/api/roles-validator'

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.css']
})
export class AppLayoutComponent implements OnInit {

  private navActive: boolean = false;
  private currentTitle: string = 'Vehicles';
  private username: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService,
    private rolesValidator: RolesValidator
  ) {}

  ngOnInit(): void {
    this.username = localStorage.getItem('username');
    const role = localStorage.getItem('role');

    if (role == 'Carrier') {
      this.currentTitle = 'Batches for transport';
    }

    this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {
      let currentRoute = this.route.root;
      do {
        let childrenRoutes = currentRoute.children;
        currentRoute = null;
        childrenRoutes.forEach(route => {
            let routeSnapshot = route.snapshot;
            if (routeSnapshot.data.title) {
              this.currentTitle = routeSnapshot.data.title;
            }
            currentRoute = route;
        });
      } while (currentRoute);
    });
  }

  signOut() {
    this.apiService.clearToken();
    this.router.navigateByUrl('login');
  }
}
