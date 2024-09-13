import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { EditAccountPage } from '../edit-account/edit-account.page';
import { SavingsAccount, StandingAccount } from '../modal/Modal';
import { BankService } from '../service/bank.service';

@Component({
  selector: 'app-find-account',
  templateUrl: './find-account.page.html',
  styleUrls: ['./find-account.page.scss'],
})
export class FindAccountPage implements OnInit {
  id: number;
  savingsAccount: SavingsAccount[];
  standingAccount: StandingAccount[];

  constructor(private route: ActivatedRoute, private router: Router, private bankService: BankService,
    private modalController: ModalController) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.bankService.findSavingsAccountAccounts(this.id).subscribe(savingsAccount => {
      this.savingsAccount = savingsAccount;
    })
    this.bankService.findStandingAccountAccounts(this.id).subscribe(standingAccount => {
      this.standingAccount = standingAccount;
    })
  }
  cancel() {
    this.router.navigate(["/find-clients/", this.id]);
  }
 async editTax(idTax) {
    const modal = await this.modalController.create({
      component: EditAccountPage,
      swipeToClose: true,
      componentProps: {idTax}
    });
    return await modal.present();
  }
  async editLoan(idLoan) {
    const modal = await this.modalController.create({
      component: EditAccountPage,
      swipeToClose: true,
      componentProps: {idLoan}
    });
    return await modal.present(); 
  }
}
