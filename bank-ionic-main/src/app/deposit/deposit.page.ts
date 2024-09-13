import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Operation, Account } from '../modal/Modal';
import { BankService } from '../service/bank.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.page.html',
  styleUrls: ['./deposit.page.scss'],
})
export class DepositPage implements OnInit {
  progressBar = false;
  operation: Operation = {} as Operation;
  account: Account = {} as Account;
  id: number;

  constructor(private modalController: ModalController, private bankService: BankService) { }

  ngOnInit() {
    this.bankService.findAccountById(this.id).subscribe(account => {
      this.account = account;
    });
  }
  cancel() {
   this.modalController.dismiss();
  }
  depositOperation() {
    this.bankService.depositOperation(this.operation, this.id).subscribe(operation => {
      this.operation = operation;
      window.location.reload();
    })
  }
}
