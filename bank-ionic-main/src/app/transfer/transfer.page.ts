import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Account, Operation, SavingsAccount } from '../modal/Modal';
import { BankService } from '../service/bank.service';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
})
export class TransferPage implements OnInit {
  savingsAccountCode: any = {};
  standingAccountCode: any = {};
  operation: Operation = {} as Operation;
  accounts: Account[];
  id: number;
  titleFrom: number;
  titleTo: number;
  progressBar = false;
  code1: number;
  code2: number;
  showTransferCode1 = false;
  showTransferCode2 = false;
  showMessageError = false;

  constructor(private bankService: BankService, private modalController: ModalController) { }

  ngOnInit() {
    if(this.code1==null) {
      this.bankService.findAccountsForClient(this.id).subscribe(accounts => {
        this.accounts = accounts;
        this.standingAccountCode = this.accounts.find(x => x.id != this.code2);
        this.code1 = this.standingAccountCode.id;
        this.titleTo = this.standingAccountCode.code;
        this.bankService.findAccountById(this.code2).subscribe(savingsAccountCode => {
          this.savingsAccountCode = savingsAccountCode;
          this.titleFrom = this.savingsAccountCode.code;
          this.showTransferCode2 = true;
        })
      });
    }
    if(this.code2==null) {
      this.bankService.findAccountsForClient(this.id).subscribe(accounts => {
        this.accounts = accounts;
        this.savingsAccountCode = this.accounts.find(x => x.id != this.code1);
        this.code2 = this.savingsAccountCode.id;
        this.titleTo = this.savingsAccountCode.code;
        this.bankService.findAccountById(this.code1).subscribe(standingAccountCode => {
          this.standingAccountCode = standingAccountCode;
          this.titleFrom = this.standingAccountCode.code;
          this.showTransferCode1 = true;
        } )
      });
    }
  }
  cancel() {
    this.modalController.dismiss();
   }

   transferCode1() {
    this.bankService.transfer(this.code2, this.code1, this.operation).subscribe(operation => {
      this.operation = operation;
      this.showMessageError = false
      window.location.reload();
    }), 
    console.error(this.showMessageError = true);    
   }

  transferCode2() {
   this.bankService.transfer(this.code1, this.code2, this.operation).subscribe(operation => {
     this.operation = operation;
     this.showMessageError = false
     window.location.reload();
   }),
   console.error(this.showMessageError = true);   
  }
}
