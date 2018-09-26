import { User } from "./user";

export class Transaction{
    id:number;
    symbol:string;
    shares:number;
    current:number;
    opening:number;
    boughtFor:number;
    sellingFor:number;
    totalReturn:number;
    date:Date;
    user:User;
    companyName:string;
    
    constructor(id, symbol, shares, current, opening, boughtFor, sellingFor, totalReturn, date,
              user, companyName) {
        this['id'] = id;
        this.symbol = symbol;
        this.current = current;
        this.shares = shares; 
        this.opening = opening;
        this.boughtFor = boughtFor;
        this.sellingFor = sellingFor;
        this.totalReturn = totalReturn;
        this.date = date;
        this.user = user;
        this.companyName = companyName;  
    }
}