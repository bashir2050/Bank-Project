import { Component, OnInit } from '@angular/core';
import { Client } from '../modal/Modal';
import { BankService } from '../service/bank.service';

@Component({
  selector: 'app-update-client',
  templateUrl: './update-client.page.html',
  styleUrls: ['./update-client.page.scss'],
})
export class UpdateClientPage implements OnInit {
  progressBar = false;
  client: Client = {} as Client;
  id: number;

  constructor(private bankService: BankService) {}

  ngOnInit() {
    this.bankService.findClient(this.id).subscribe(client => {
      this.client = client;
    });
  }
  updateClient(id) {
   this.progressBar = true;
   this.bankService.updateClient(this.client, id).subscribe(client => {
    this.client = client;
    this.cancel();
   })
  }
  cancel() {
   window.location.reload();
  }
}
