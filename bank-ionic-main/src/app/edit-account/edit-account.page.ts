import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SavingsAccount, StandingAccount } from '../modal/Modal';
import { BankService } from '../service/bank.service';

@Component({
  selector: 'app-edit-account',
  templateUrl: './edit-account.page.html',
  styleUrls: ['./edit-account.page.scss'],
})
export class EditAccountPage implements OnInit {
  idTax: number;
  savingsAccount: SavingsAccount = {} as SavingsAccount;
  progressBar = false;
  showEditTax = false;
  showEditLoan = false;
  idLoan: number;
  standingAccount: StandingAccount = {} as StandingAccount;


  constructor(private bankService: BankService, private modalController: ModalController) { }

  ngOnInit() {
    if(this.idTax!=null) {
    this.bankService.findAccountById(this.idTax).subscribe(savingsAccount => {
      this.savingsAccount = savingsAccount;
      this.showEditTax = true;
    })
    }
    if(this.idLoan!=null) {
      this.bankService.findAccountById(this.idLoan).subscribe(standingAccount => {
        this.standingAccount = standingAccount;
        this.showEditLoan = true;
      });
    }
  }
  addStandingAccountTax() {
    this.progressBar = true;
    this.bankService.editSavingsAccount(this.savingsAccount, this.idTax).subscribe(savingsAccount => {
      this.savingsAccount = savingsAccount;
      window.location.reload();
    })
  }
  addStandingAccountLoan() {
    this.progressBar = true;
    this.bankService.editStandingAccount(this.standingAccount, this.idLoan).subscribe(savingsAccount => {
      this.savingsAccount = savingsAccount;
      window.location.reload();
    })
  }
  cancel() {
   this.modalController.dismiss();
  }
}
