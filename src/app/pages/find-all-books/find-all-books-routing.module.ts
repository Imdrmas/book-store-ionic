import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindAllBooksPage } from './find-all-books.page';

const routes: Routes = [
  {
    path: '',
    component: FindAllBooksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindAllBooksPageRoutingModule {}
