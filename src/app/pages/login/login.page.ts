import { UserService } from './../../service/user.service';
import { User } from './../../modal/Modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  progressBar = false;
  user: User = {} as User;
  username: string;

  constructor(private userService: UserService) { }

  ngOnInit() {
   
  }
onSubmit() {
  this.progressBar = true;
  this.userService.findByUsername(this.userService.getUsername()).subscribe(user => {
    if(user.username != null) {
      this.userService.editUser(this.user, user.id).subscribe(user => {
        this.user = user;
        this.userService.saveUsername(this.user.username);
      })
    } else {
      this.userService.addUser(this.user).subscribe(user => {
        this.user = user;
        this.userService.saveUsername(this.user.username);
      })
    }
    window.location.reload();
  })
}

}
