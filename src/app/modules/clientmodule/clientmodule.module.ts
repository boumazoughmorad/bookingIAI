import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientmoduleRoutingModule } from './clientmodule-routing.module';
import { ClientmoduleComponent } from '../clientmodule/clientmodule.component';
import { AddClientComponent } from './add-client/add-client.component';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ClientmoduleComponent,
    AddClientComponent,
  ],
  imports: [
    CommonModule,
    ClientmoduleRoutingModule,
    HttpClientModule,
  ]
})
export class ClientmoduleModule { }
