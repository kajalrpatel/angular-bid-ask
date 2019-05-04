import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aunction',
  templateUrl: './aunction.component.html',
  styleUrls: ['./aunction.component.css']
})
export class AunctionComponent implements OnInit {
  public currency = ["EUR/USD","EUR/GBP","USD/CAD","AUD/CAD","USD/JPY"];
  price11 = Math.floor(30 + Math.random() * 90);
  price12 = Math.floor(10 + Math.random() * 90);
  price13 = Math.floor(1 + Math.random() * 9);
  price1 = "1."+this.price11+this.price12+this.price13;
  price21 = Math.floor(30 + Math.random() * 90);
  price22 = Math.floor(10 + Math.random() * 90)-Math.floor(1 + Math.random() * 9);
  price23 = Math.floor(1 + Math.random() * 9);
  price2 = "1."+this.price21+this.price22+this.price23;
  selectedcurr: string = '';
  buysell: string = '';
   appendedHtml: string = '';
  constructor() { }
  
  ngOnInit() {
    const price = this.getRandombitInt();
  }
   getRandombitInt() {
        return Math.floor(100000 + Math.random() * 900000);
    }
   
  auction_action(price:any,bid:string){
    const curr = (<HTMLSelectElement>document.getElementById('curr_select')).value;
  if(bid=='b'){
    this.appendedHtml = '<div  style="background:#449d44;box-shadow: 0 0 0 3px #268826;">   <p>Buy 200,000,000</p><p>'+curr+' @ '+price+'</p></div>';
  }else if(bid=='a'){
    this.appendedHtml = '<div  style="background: #c9302c; box-shadow: 0 0 0 3px #a4211d;">   <p>Sell 200,000,000</p><p>'+curr+' @ '+price+'</p></div>';
  }
  this.buysell = this.buysell + this.appendedHtml;
  console.log(curr + price +bid);
  }
}