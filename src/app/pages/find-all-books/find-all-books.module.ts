import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindAllBooksPageRoutingModule } from './find-all-books-routing.module';

import { FindAllBooksPage } from './find-all-books.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindAllBooksPageRoutingModule
  ],
  declarations: [FindAllBooksPage]
})
export class FindAllBooksPageModule {}
