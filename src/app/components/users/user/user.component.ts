import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { IUser } from './../../../interfaces/user';
import { UserService } from './../../../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  animations: [
    trigger('openClose',[
      state(
        'open', 
        style({
          height: '200px',
          opacity: 1,
          backgroundColor: 'green'
        })
      ),
      state(
        'closed', 
        style({
          height: '100px',
          opacity: 0.5,
          backgroundColor: 'yellow'
        })
      ),
      transition('open => closed', [animate('0.3s')]),
      transition('closed => open', [animate('0.3s')])
    ])
  ],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit{
  isOpen = true;

  users: IUser[];

  constructor(private userService: UserService){}

  ngOnInit(){
    this.userService.getUsersViaREST().subscribe( users => this.users =users );
  }

  toggle(){
    this.isOpen = !this.isOpen;
  }

}
