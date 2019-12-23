import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent {

  animal = 'GATITO'

  onClick(){
    alert(this.animal);
  }

  onKeyUp(keyUpEvent){
    keyUpEvent.code === 'Enter' && alert('hola');
  }

}
