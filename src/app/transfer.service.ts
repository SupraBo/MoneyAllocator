import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor() { }


  safeMoreMoney: number;
  safeLessMoney: number;
  youMoney: number;
  riskMoreMoney: number;
  riskLessMoney: number;


  setData(age: number, inc: number) {

    if (age >= 100) {
      window.alert("Age can't be greater than 100.")
    }
    else {

      // Fund Logic

      //Safe Fund
      var x: number = Math.trunc((age / 10)); //Removing decimal points with Math.trunc()
      var y: number = x * 10;
      var z: number = y + 10; //Next Rounded Number

      var roundPercent: number = z * 0.01;
      var safeMoney: number = inc * roundPercent;
      var safeMoreMoney: number = safeMoney * 0.7;
      var safeLessMoney: number = safeMoney - safeMoreMoney;
      this.safeMoreMoney = safeMoreMoney;
      this.safeLessMoney = safeLessMoney;

      //You Fund
      var youMoney: number = inc * 0.05;
      var youHalfMoney: number = youMoney / 2;
      this.youMoney = youHalfMoney; 

      //Risk Fund
      var riskMoney: number = inc - (safeMoney + youMoney);
      var riskMoreMoney: number = riskMoney * 0.7;
      var riskLessMoney: number = riskMoney - riskMoreMoney;
      this.riskMoreMoney = riskMoreMoney;
      this.riskLessMoney = riskLessMoney;
    }


  }


  //Returning the values

  getsafe60(){
    return this.safeMoreMoney;
  }

  getsafe40(){
    return this.safeLessMoney;
  }
  
  getYouMoney(){
    return this.youMoney;
  }


  getrisk70(){
   return this.riskMoreMoney; 
  }


  getrisk30(){
    return this.riskLessMoney;
  }

}
