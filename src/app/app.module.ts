import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';

import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './layouts/app-layout.component';
import { EmptyLayoutComponent } from './layouts/empty-layout.component';

import { ApiService } from './shared/api/api.service';
import { RolesValidator } from './shared/api/roles-validator';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    EmptyLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [
    ApiService, RolesValidator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
