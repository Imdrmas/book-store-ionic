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
      path: 'search-book',
      loadChildren: () => import('../search-book/search-book.module').then( m => m.SearchBookPageModule)
    },
    {
      path: 'find-all-books',
      loadChildren: () => import('../find-all-books/find-all-books.module').then( m => m.FindAllBooksPageModule)
    },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
