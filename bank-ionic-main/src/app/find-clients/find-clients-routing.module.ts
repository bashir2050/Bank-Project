import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindClientsPage } from './find-clients.page';

const routes: Routes = [
  {
    path: '',
    component: FindClientsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindClientsPageRoutingModule {}
