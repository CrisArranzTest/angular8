import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IUser } from './../../../interfaces/user';
import { UserService } from './../../../services/user/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{

  user: IUser[];

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService){

  }
 
  ngOnInit(){
    this.activatedRoute.params.subscribe(params=> {
      // this.user = this.userService.getUserById(+params['id'])
      this.userService.getUserByIdViaREST(+params['id']).subscribe(user => this.user = user);
    })
    
    this.activatedRoute.queryParams.subscribe((qs) => console.log('Got thq QS as: ', qs))
  }
}
