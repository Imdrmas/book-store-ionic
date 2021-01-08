import { Component, OnInit } from '@angular/core';

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
      title: 'Cool Framework',
      open: true,
      children: [
        {
          title: 'Login',
          url: '/menu/login',
          icon: 'logo-ionic'
        },
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
