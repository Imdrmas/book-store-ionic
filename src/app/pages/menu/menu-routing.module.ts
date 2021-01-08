import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/menu/main',
    pathMatch: 'full'
  },
  {path: '', component: MenuPage,
  children: [
    {
      path: 'main',
      loadChildren: () => import('../main/main.module').then( m => m.MainPageModule)
    },
    {
      path: 'login',
      loadChildren: () => import('../login/login.module').then( m => m.LoginPageModule)
    },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
