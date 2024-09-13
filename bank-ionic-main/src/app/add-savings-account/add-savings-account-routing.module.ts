import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddSavingsAccountPage } from './add-savings-account.page';

const routes: Routes = [
  {
    path: '',
    component: AddSavingsAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddSavingsAccountPageRoutingModule {}
