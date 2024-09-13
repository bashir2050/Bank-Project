import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AddSavingsAccountPage } from '../add-savings-account/add-savings-account.page';
import { AddStandingAccountPage } from '../add-standing-account/add-standing-account.page';
import { CheckingAccountPage } from '../checking-account/checking-account.page';
import { Client } from '../modal/Modal';
import { BankService } from '../service/bank.service';
import { UpdateClientPage } from '../update-client/update-client.page';



@Component({
  selector: 'app-find-clients',
  templateUrl: './find-clients.page.html',
  styleUrls: ['./find-clients.page.scss'],
})
export class FindClientsPage implements OnInit {
  id: number;
  client: Client = {} as Client;
  clients: Client[];
  accountsAdded = 0;
  standingAccount: any;

  techs = [
    {
      'title': 'Contacts',
      'icon': 'call-outline'
    },
    {
      'title': 'Products',
      'icon': 'card-outline'
    },
    {
      'title': 'Warning',
      'icon': 'warning'
    },
    {
      'title': 'Help',
      'icon': 'help-circle'
    }
  ];

  constructor(private route: ActivatedRoute, private bankService: BankService,
    private modalController: ModalController, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.bankService.findClient(this.id).subscribe(client => {
     this.client = client;
     this.accountsAdded = this.client.accounts.length;
   });
   this.bankService.findClients().subscribe(clients => {
     this.clients = clients;
   });
  }
  logout() {
    this.router.navigateByUrl("/login")
  }

  async updateClient(id: number) {
    const modal = await this.modalController.create({
      component: UpdateClientPage,
      swipeToClose: true,
      componentProps: {id}
    });
    return await modal.present();
  }

  async addStandingAccount(id) {
    const modal = await this.modalController.create({
      component: AddStandingAccountPage,
      swipeToClose: true,
      componentProps: {id}
    });
    return await modal.present();
  }
  async addSavingsAccount(id) {
    const modal = await this.modalController.create({
      component: AddSavingsAccountPage,
      swipeToClose: true,
      componentProps: {id}
    });
    return await modal.present();
  }
  checkingAccount(id) {
    this.router.navigate(['/checking-account/', id])
  }
}
