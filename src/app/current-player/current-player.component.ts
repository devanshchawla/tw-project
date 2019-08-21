import { BomberComponent } from './../bomber/bomber.component';
import { Component, OnInit } from '@angular/core';
import { ChildActivationEnd } from '@angular/router';

@Component({
  selector: 'current-player',
  templateUrl: './current-player.component.html',
  styleUrls: ['./current-player.component.css']
})
export class CurrentPlayerComponent implements OnInit {
  
  constructor() { }
  terrorsistActive: boolean  = true; //1 terrorist
  timmerActive: boolean = false;
  nValue: number;
  receiveN($event){
    this.terrorsistActive= false;
    this.nValue=$event;
    this.timmerActive= true;
  }
  bombDiffused($event){
    this.terrorsistActive = true;
  }
  ngOnInit() {
  }

}
