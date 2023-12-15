import { Component, OnInit } from '@angular/core';

import { User } from '../../../models/user/user.model';
import { UsersService } from '../../../services/users/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit {
 
  user: User = new User();
  constructor(private userService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveUser(){
    this.userService.create(this.user).subscribe( data =>{
      console.log(data);
      this.goToUsersList();
    },
    error => console.log(error));
  }

  goToUsersList(){
    this.router.navigate(['/users']);
  }
  
  onSubmit(){
    console.log(this.user);
    this.saveUser();
  }

}
