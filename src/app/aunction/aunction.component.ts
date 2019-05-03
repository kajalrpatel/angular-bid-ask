import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aunction',
  templateUrl: './aunction.component.html',
  styleUrls: ['./aunction.component.css']
})
export class AunctionComponent implements OnInit {
  public currency = ["EUR/USD","EUR/GBP","USD/CAD","AUD/CAD","USD/JPY"];
  constructor() { }

  ngOnInit() {
  }
   getRandombitInt() {
        return Math.floor(100000 + Math.random() * 900000);
    }

}