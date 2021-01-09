import { UserService } from './../../service/user.service';
import { User } from './../../modal/Modal';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  progressBar = false;
  user: User = {} as User;
  username: string;

  constructor(private userService: UserService, private modalController: ModalController) { }

  ngOnInit() {
    
  }
  onSubmit() {
    this.progressBar = true;
    this.userService.findByUsername(this.username).subscribe(user => {
       if(user == null) {
        this.userService.addUser(this.user).subscribe(user => {
          this.user = user;
          this.userService.saveUsername(this.user.username);
          window.location.replace('/menu/main')
        })
       } else {
          this.userService.editUser(this.user, user.id).subscribe(user => {
            this.user = user;
            this.userService.saveUsername(this.user.username);
            window.location.replace('/menu/main')
          })
        }
    });
  }

  cancel() {
    this.modalController.dismiss();
  }

}
