import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public total: number;
  constructor() { 
  }

  ngOnInit(): void {
    this.total = history.state.total;
  }

  validate(inputtext)
  {
    var cardnumber = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
    if(inputtext.value.match(cardnumber))
          {
        return true;
          }
        else
          {
          alert("Not a valid Visa credit card number!");
          return false;
          }
  }

}
