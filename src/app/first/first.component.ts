import { Component, OnInit } from '@angular/core';
import { TransferService } from '../transfer.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  myform : FormGroup;

  ngOnInit() {

    this.myform = new FormGroup({
      age : new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(2)
      ]),
      income : new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ])
    });

  }

  constructor(private transferData: TransferService) { }

 

  moneyAlloc(age: number, inc: number) {
    this.transferData.setData(age, inc);
  }

}
