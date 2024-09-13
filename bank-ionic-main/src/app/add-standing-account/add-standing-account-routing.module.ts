import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddStandingAccountPage } from './add-standing-account.page';

const routes: Routes = [
  {
    path: '',
    component: AddStandingAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddStandingAccountPageRoutingModule {}
