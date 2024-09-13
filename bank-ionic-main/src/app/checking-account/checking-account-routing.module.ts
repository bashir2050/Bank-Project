import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckingAccountPage } from './checking-account.page';

const routes: Routes = [
  {
    path: '',
    component: CheckingAccountPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckingAccountPageRoutingModule {}
