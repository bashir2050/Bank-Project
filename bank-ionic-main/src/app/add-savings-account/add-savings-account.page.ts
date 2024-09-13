import { Component, OnInit } from '@angular/core';
import { Client, SavingsAccount } from '../modal/Modal';
import { BankService } from '../service/bank.service';

@Component({
  selector: 'app-add-savings-account',
  templateUrl: './add-savings-account.page.html',
  styleUrls: ['./add-savings-account.page.scss'],
})
export class AddSavingsAccountPage implements OnInit {
  progressBar = false;
  id: number;
  savingsAccount: SavingsAccount = {} as SavingsAccount;
  savingsAccountExist = 0;
  client: Client = {} as Client;

  constructor(private bankService: BankService) { }

  ngOnInit() {
    this.bankService.findClient(this.id).subscribe(client => {
      this.client = client;
      this.bankService.findSavingsAccountAccounts(this.client.id).subscribe(data => {
        this.savingsAccountExist = data.length;
      })
    });
  }
  addStandingAccount() {
    this.progressBar = true;
    this.bankService.addSavingsAccount(this.savingsAccount, this.id).subscribe(savingsAccount => {
      this.savingsAccount = savingsAccount;
      this.cancel();
    })
  }
  cancel() {
    window.location.reload();
  }
}
