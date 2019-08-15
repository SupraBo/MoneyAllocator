import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(private transferData: TransferService) { }

  ngOnInit() {
  }

  moneyAlloc(age: number, inc: number) {
    this.transferData.setData(age, inc);
  }

}
