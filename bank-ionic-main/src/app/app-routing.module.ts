import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'find-clients/:id',
    loadChildren: () => import('./find-clients/find-clients.module').then( m => m.FindClientsPageModule)
  },
  {
    path: 'update-client',
    loadChildren: () => import('./update-client/update-client.module').then( m => m.UpdateClientPageModule)
  },
  {
    path: 'add-standing-account',
    loadChildren: () => import('./add-standing-account/add-standing-account.module').then( m => m.AddStandingAccountPageModule)
  },
  {
    path: 'add-savings-account',
    loadChildren: () => import('./add-savings-account/add-savings-account.module').then( m => m.AddSavingsAccountPageModule)
  },
  {
    path: 'checking-account/:id',
    loadChildren: () => import('./checking-account/checking-account.module').then( m => m.CheckingAccountPageModule)
  },
  {
    path: 'operation',
    loadChildren: () => import('./operation/operation.module').then( m => m.OperationPageModule)
  },
  {
    path: 'deposit',
    loadChildren: () => import('./deposit/deposit.module').then( m => m.DepositPageModule)
  },
  {
    path: 'debit',
    loadChildren: () => import('./debit/debit.module').then( m => m.DebitPageModule)
  },
  {
    path: 'transfer',
    loadChildren: () => import('./transfer/transfer.module').then( m => m.TransferPageModule)
  },
  {
    path: 'find-account/:id',
    loadChildren: () => import('./find-account/find-account.module').then( m => m.FindAccountPageModule)
  },
  {
    path: 'edit-account',
    loadChildren: () => import('./edit-account/edit-account.module').then( m => m.EditAccountPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
