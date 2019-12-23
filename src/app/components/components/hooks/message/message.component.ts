import { Component, Input, Output, EventEmitter, OnInit, SimpleChanges, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() message: string;
  @Input() index: number;
  @Output() messageDeleted: EventEmitter<number> = new EventEmitter<number>();

  constructor(){
    console.log(`Message constructor`);
  }

  ngOnInit(){
    console.log(`Message onInit`);
  }
  
  ngDoCheck(){
    console.log(`Message doCheck`);
  }

  ngOnChanges(changes: SimpleChanges){
    console.log(`Message onChanges`);
    for(let prop in changes){
      console.log(`Property Name: ${prop}. Current Change: ${changes[prop].currentValue}. Previous Change: ${changes[prop].previousValue}`);
    }
  }

  ngAfterContentInit(){
    console.log(`Message AfterContentInit`);
  }

  ngAfterContentChecked(){
    console.log(`Message AfterContentChecked`);
  }
  
  ngAfterViewInit(){
    console.log(`Message AfterViewInit`);
  }

  ngAfterViewChecked(){
    console.log(`Message AfterViewChecked`);
  }

  ngOnDestroy(){
    console.log(`Message onDestroy`);
  }
  
  delete(){
    this.messageDeleted.emit(this.index);
  }
}
