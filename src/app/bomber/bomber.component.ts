import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { timer } from 'rxjs';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'bomber',
  templateUrl: './bomber.component.html',
  styleUrls: ['./bomber.component.css']
})
export class BomberComponent implements OnInit {
  timerOn: boolean = true;
  getDiffuser: boolean = false;
  timer: number;
  diffused: boolean = false;
  exploded: boolean = false;
  url: string="http://35.225.41.137/frontendtask/check";
  @Output() messageEvent = new EventEmitter<string>();
  sendMessage(value) {
    this.messageEvent.emit(value);
  }
  primeFactorsTo(max){
    var store  = [], i, j, primes = [];
    for (i = 2; i <= max; ++i) 
    {
        if (!store [i]) 
          {
            primes.push(i);
            for (j = i << 1; j <= max; j += i) 
            {
                store[j] = true;
            }
        }
    }
    console.log(primes.length);
}
  constructor() {
    this.timer  = 60;
   }
  showDiffuser(){
      if(!this.exploded) this.getDiffuser = true;
      this.primeFactorsTo(100);
      fetch(this.url, {
        method: 'GET',
        headers: {
          'n': '100',
          'output': '25',
          'name': 'test'
        }
      })
      .then(function(data){
        console.log(data);
      })
   }
   diffuseBomb(){
     if(this.timer != 0){
       console.log('works');
       this.diffused = true;
       this.timer = 1;
        this.timerOn = false;
       //this.sendMessage('true');
     }
   }
   restart(){
    this.sendMessage('true');
   }
   bombExploded(){

   }
  ngOnInit() {
    this.timer=60;
    var restart= setInterval(()=>{    //<<<---    using ()=> syntax
      this.timer--;
      if(this.timer == 0){
          if(!this.diffused) this.exploded = true;
          this.bombExploded();
          clearInterval(restart);
      }

 }, 1000);
  }

}
