import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/user/user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../../services/users/users.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrl: './update-user.component.css'
})
export class UpdateUserComponent implements OnInit {

  id!: number;
  user: User = new User();
  constructor(private userService: UsersService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.userService.getById(this.id).subscribe(data => {
      this.user = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.userService.update(this.id, this.user).subscribe( data =>{
      this.goToUserList();
    }
    , error => console.log(error));
  }

  goToUserList(){
    this.router.navigate(['/users']);
  }

}
