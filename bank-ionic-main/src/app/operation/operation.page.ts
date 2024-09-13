import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Operation } from '../modal/Modal';
import { BankService } from '../service/bank.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.page.html',
  styleUrls: ['./operation.page.scss'],
})
export class OperationPage implements OnInit {
  id: number;
  operations: Operation[];

  constructor(private bankService: BankService, private modalController: ModalController) { }

  ngOnInit() {
    this.bankService.checkingAccount(this.id).subscribe(operations => {
      this.operations = operations;
    })
  }
  cancel() {
    this.modalController.dismiss();
  }
}
