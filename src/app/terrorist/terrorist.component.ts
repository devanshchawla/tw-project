import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'terrorist',
  templateUrl: './terrorist.component.html',
  styleUrls: ['./terrorist.component.css']
})
export class TerroristComponent implements OnInit {
  numberSet: boolean = false;
  count: number = 6;
  constructor() { }
  @Output() messageEvent = new EventEmitter<boolean>();
  sendMessage(value) {
    this.messageEvent.emit(value);
  }
  ngOnInit() {
  }
  setN($event){
    
    var restart= setInterval(()=>{    //<<<---    using ()=> syntax
      //this.count--;
      //console.log(this.count);
      //if(this.count== 0){
        this.numberSet = true;
        this.playAudio();
        this.sendMessage($event.target.value);
          //clearInterval(restart);
      //}
 }, 1000);
    //this.numberSet = true;
    //this.sendMessage($event.target.value);
    
  }
  playAudio(){
    let audio = new Audio();
    audio.src = "/CountdownClock-BombeTimerSOUND-[AudioTrimmer.com].mp3";
    audio.load();
    audio.play();
  }
}
