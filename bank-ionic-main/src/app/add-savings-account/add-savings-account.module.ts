import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddSavingsAccountPageRoutingModule } from './add-savings-account-routing.module';

import { AddSavingsAccountPage } from './add-savings-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddSavingsAccountPageRoutingModule
  ],
  declarations: [AddSavingsAccountPage]
})
export class AddSavingsAccountPageModule {}
