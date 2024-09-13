export interface Account {
   id: number;
   code: string;
   createDate: any;
   balance: number;
}

export interface Client {
    id: number;
    username: string;
    password: string;
    name: string;
    email: string;
    admin: boolean;
    accounts: Account[];
}

export interface Credit extends Operation {

}

export interface Operation {
    numberOperation: number;
    operationDate: any;
    amount: number;
    typeOperation: string
}

export interface SavingsAccount extends Account {
    tax: number;
}

export interface StandingAccount extends Account {
    loan: number;
}

export interface Withdraw extends Operation {

}

export interface AmmountResponse {
    amount: number;
}