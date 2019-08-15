import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor() { }


  safe60Money: number;
  safe40Money: number;
  youMoney: number;
  risk70Money: number;
  risk30Money: number;


  setData(age: number, inc: number) {

    if (age >= 100) {
      window.alert("Age can't be greater than 100.")
    }
    else {

      // Fund Logic

      //Safe Fund
      var agePercent: number = age * 0.01;
      var safeMoney: number = inc * agePercent;
      var safe60Money: number = safeMoney * 0.6;
      var safe40Money: number = safeMoney - safe60Money;
      this.safe60Money = safe60Money;
      this.safe40Money = safe40Money;

      //You Fund
      var x: number = Math.trunc((age / 10)); //Removing decimal points with Math.trunc()
      var y: number = x * 10;
      var z: number = y + 10; //Next Rounded Number
      

      var yearsBetween: number = z - age;
      var yearsBetweenPercent: number = yearsBetween * 0.01;
      var youMoney: number = inc * yearsBetweenPercent;
      var youHalfMoney: number = youMoney / 2;
      this.youMoney = youHalfMoney; 

      //Risky Fund
      var riskMoney: number = inc - (safeMoney + youMoney);
      var risk70Money: number = riskMoney * 0.7;
      var risk30Money: number = riskMoney - risk70Money;
      this.risk70Money = risk70Money;
      this.risk30Money = risk30Money;
    }


  }


  //Returning the values

  getsafe60(){
    return this.safe60Money;
  }

  getsafe40(){
    return this.safe40Money;
  }
  
  getYouMoney(){
    return this.youMoney;
  }


  getrisk70(){
   return this.risk70Money; 
  }


  getrisk30(){
    return this.risk30Money;
  }

}
