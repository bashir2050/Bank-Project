import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckingAccountPageRoutingModule } from './checking-account-routing.module';

import { CheckingAccountPage } from './checking-account.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckingAccountPageRoutingModule
  ],
  declarations: [CheckingAccountPage]
})
export class CheckingAccountPageModule {}
