import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../models/user/user.model';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrl: './users-list.component.css'
})
export class UsersListComponent  implements OnInit {

  users: User[] = [];

  constructor(private userService: UsersService,
    private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(){
    this.userService.getAll().subscribe(data => {
      this.users = data;
    });
  }

  userDetails(id: number){
    this.router.navigate(['user-details', id]);
  }

  updateUser(id: number){
    this.router.navigate(['update-User', id]);
  }

  deleteUser(id: number){
    this.userService.delete(id).subscribe( data => {
      console.log(data);
      this.getUsers();
    })
  }
}
