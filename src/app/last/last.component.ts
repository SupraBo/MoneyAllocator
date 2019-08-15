import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-last',
  templateUrl: './last.component.html',
  styleUrls: ['./last.component.css']
})
export class LastComponent implements OnInit {

  safe60: number;
  safe40: number;
  you50: number;
  risk70: number;
  risk30: number;


  constructor(private transferData: TransferService) {

    this.safe60 = transferData.getsafe60();
    this.safe40 = transferData.getsafe40();
    this.you50 = transferData.getYouMoney();
    this.risk70 = transferData.getrisk70();
    this.risk30 = transferData.getrisk30();

  }

  ngOnInit() {
  }



}
