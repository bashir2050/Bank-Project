import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Client } from "../modal/Modal";
import { BankService } from "../service/bank.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  progressBar = false;
  client: Client = {} as Client;

  constructor(private bankService: BankService, private router: Router) {}

  ngOnInit() {}

  addClient() {
    this.bankService.saveClient(this.client).subscribe((client) => {
      this.client = client;
      this.router.navigate(["/find-clients/", client.id]);
    });
  }
}
