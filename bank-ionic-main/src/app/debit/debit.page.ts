import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Operation, Account } from '../modal/Modal';
import { BankService } from '../service/bank.service';

@Component({
  selector: 'app-debit',
  templateUrl: './debit.page.html',
  styleUrls: ['./debit.page.scss'],
})
export class DebitPage implements OnInit {
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
  debitOperation() {
    this.bankService.debitOperation(this.operation, this.id).subscribe(operation => {
      this.operation = operation;
      window.location.reload();
    })
  }
}
