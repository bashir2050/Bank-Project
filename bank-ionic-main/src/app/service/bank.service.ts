import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AmmountResponse, Client, Operation, SavingsAccount, StandingAccount } from '../modal/Modal';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient) { }

  checkingAccount(code: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/checkingAccount/${code}`);
  }

  depositOperation(operation: Operation, code: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/depositOperation/${code}`, operation);
  }

  saveClient(client: Client): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/saveClient`, client);
  }
  addStandingAccount(standingAcount: StandingAccount, code: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addStandingAccount/${code}`, standingAcount);
  }
  addSavingsAccount(savingsAccount: SavingsAccount, code: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/addSavingsAccount/${code}`, savingsAccount);
  }
  debitOperation(ammountResponse: AmmountResponse, code: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/debitOperation/${code}`, ammountResponse); 
  }
  findWithdraws(code: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/findWithdraws/${code}`); 
  }
  findCredits(code: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/findCredits/${code}`); 
  }
  transfer(code1: number, code2: number, operation: Operation,): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/transfer/${code1}/${code2}`, operation); 
  }
  findClients(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/findClients`); 
  }
  findClient(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findClient/${id}`); 
  }
  updateClient(client: Client, id: number): Observable<any> {
    return this.http.put<any>(`http://localhost:8080/api/updateClient/${id}`, client);
  }
  findStandingAccountAccounts(id: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/findStandingAccountAccounts/${id}`); 
  }
  findSavingsAccountAccounts(id: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/findSavingsAccountAccounts/${id}`); 
  }
  findAccountById(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/api/findAccountById/${id}`); 
  }
  findAccountsForClient(id: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/findAccountsForClient/${id}`); 
  }
  editStandingAccount(standingAccount: StandingAccount, id: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/editStandingAccount/${id}`, standingAccount); 
  }
  editSavingsAccount(savingsAccount: SavingsAccount, id: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/editSavingsAccount/${id}`, savingsAccount); 
  }
}
