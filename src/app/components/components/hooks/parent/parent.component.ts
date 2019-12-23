import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  user: { name: string } = { name: 'Cristian Arranz' }
  
  onChangeNameClick(){
    this.user.name = 'Arranz Cristian';
  }

  onChangeObjectClick(){
    this.user = { name: 'CRISTIAN ARRANZ' };
  }
}
