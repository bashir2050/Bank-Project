import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindClientsPageRoutingModule } from './find-clients-routing.module';

import { FindClientsPage } from './find-clients.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindClientsPageRoutingModule
  ],
  declarations: [FindClientsPage]
})
export class FindClientsPageModule {}
