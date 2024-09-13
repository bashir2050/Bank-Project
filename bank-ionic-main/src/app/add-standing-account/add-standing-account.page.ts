import { Component, OnInit } from '@angular/core';
import { Client, StandingAccount } from '../modal/Modal';
import { BankService } from '../service/bank.service';

@Component({
  selector: 'app-add-standing-account',
  templateUrl: './add-standing-account.page.html',
  styleUrls: ['./add-standing-account.page.scss'],
})
export class AddStandingAccountPage implements OnInit {
  progressBar = false;
  id: number;
  standingAccount: StandingAccount = {} as StandingAccount;
  standingAccountsExist = 0;
  client: Client = {} as Client;

  constructor(private bankService: BankService) { }

  ngOnInit() {
    this.bankService.findClient(this.id).subscribe(client => {
      this.client = client;
      this.bankService.findStandingAccountAccounts(this.client.id).subscribe(data => {
        this.standingAccountsExist = data.length;
      })
    });
  }
  addStandingAccount() {
    this.progressBar = true;
    this.bankService.addStandingAccount(this.standingAccount, this.id).subscribe(standingAccount => {
      this.standingAccount = standingAccount;
      this.cancel();
    })
  }
  cancel() {
    window.location.reload();
  }
}
