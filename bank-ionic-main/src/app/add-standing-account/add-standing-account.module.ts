import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddStandingAccountPageRoutingModule } from './add-standing-account-routing.module';

import { AddStandingAccountPage } from './add-standing-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddStandingAccountPageRoutingModule
  ],
  declarations: [AddStandingAccountPage]
})
export class AddStandingAccountPageModule {}
