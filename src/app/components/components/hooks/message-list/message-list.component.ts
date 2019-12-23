import { Component } from '@angular/core';

import { CanComponentDeactivate } from '../../../../guards/confirmation/confirmation.guard';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements CanComponentDeactivate {

  messages: Array<{ message: string }> = [];
  message: string = '';

  addMessage(){
    this.messages.push({ message: this.message });
    this.message = '';
  }

  onMessageDelete($event){
    this.messages.splice($event, 1);
  }

  changeFirstMessage(){
    this.messages[0].message = 'We change the first Message';
  }

  confirm(){
    return confirm('Are you sure you want to naviagate away?');
  }
}
