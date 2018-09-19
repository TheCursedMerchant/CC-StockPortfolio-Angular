export class QuoteClass {
    symbol ? : undefined;
    companyName ? : undefined;
    open ? : undefined;

    // https://visualstudiomagazine.com/articles/2016/01/01/exploiting-typescript-arrays.aspx
    constructor(symbol, companyName, open){
        this.symbol = symbol;
        this.companyName = companyName;
        this.open = open;
    }
    // QuoteClass(){}
    // QuoteClass(symbol, companyName, open){ 
    //     this.symbol = symbol;

    // }
}