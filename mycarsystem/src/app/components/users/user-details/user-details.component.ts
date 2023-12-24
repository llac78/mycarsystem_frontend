import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user/user.model';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit {

  id: number;
  user: User;

  constructor(private route: ActivatedRoute, private userService: UsersService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.user = new User();
    this.userService.getById(this.id).subscribe( data => {
      this.user = data;
    });
  }

}
