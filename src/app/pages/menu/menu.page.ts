import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modal/Modal';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
    pages = [
    {
      title: 'Home',
      url: '/menu/main',
      icon: 'home',
      open: true
    },
    {
      title: 'Cool shop books',
      open: true,
      children: [
        {
          title: 'Search book',
          url: '/menu/search-book',
          icon: 'search-circle-outline'
        },
        {
          title: 'All books',
          url: '/menu/find-all-books',
          icon: 'book-outline'
        },
      ]
    }
  ];
  
  constructor() { }

  ngOnInit() {

  }

}
