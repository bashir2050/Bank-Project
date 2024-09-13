import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { DebitPage } from "../debit/debit.page";
import { DepositPage } from "../deposit/deposit.page";
import { Account, SavingsAccount, StandingAccount } from "../modal/Modal";
import { OperationPage } from "../operation/operation.page";
import { BankService } from "../service/bank.service";
import { TransferPage } from "../transfer/transfer.page";

@Component({
  selector: "app-checking-account",
  templateUrl: "./checking-account.page.html",
  styleUrls: ["./checking-account.page.scss"],
})
export class CheckingAccountPage implements OnInit {
  savingsAccount: SavingsAccount = {} as SavingsAccount;
  savingsAccounts: SavingsAccount[];
  stadingAccounts: StandingAccount[];
  account: Account = {} as Account;
  code: any;
  id: number;

  constructor(
    private bankService: BankService,
    private modalController: ModalController,
    private route: ActivatedRoute, private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.bankService.findStandingAccountAccounts(this.id).subscribe((stadingAccounts) => {
        this.stadingAccounts = stadingAccounts;
      });
    this.bankService.findSavingsAccountAccounts(this.id).subscribe((savingsAccounts) => {
        this.savingsAccounts = savingsAccounts;
      });
  }

  cancel() {
    this.router.navigate(["/find-clients/", this.id]);
  }
  async doOperation(id) {
    const modal = await this.modalController.create({
      component: OperationPage,
      swipeToClose: true,
      componentProps: { id },
    });
    return await modal.present();
  }
  async depositOperation(id) {
    const modal = await this.modalController.create({
      component: DepositPage,
      swipeToClose: true,
      componentProps: { id },
    });
    return await modal.present();
  }
  async debitOperation(id) {
    const modal = await this.modalController.create({
      component: DebitPage,
      swipeToClose: true,
      componentProps: { id },
    });
    return await modal.present();
  }
  async transferCode1(code1, id) {
    const modal = await this.modalController.create({
      component: TransferPage,
      swipeToClose: true,
      componentProps: { code1, id },
    });
    return await modal.present();
  }
  async transferCode2(code2, id) {
    const modal = await this.modalController.create({
      component: TransferPage,
      swipeToClose: true,
      componentProps: { code2, id },
    });
    return await modal.present();
  }
  logout() {
    this.router.navigateByUrl("/login")
  }
}
