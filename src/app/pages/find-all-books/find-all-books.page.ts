import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Book } from 'src/app/modal/Modal';
import { BookService } from 'src/app/service/book.service';
import { BookDetailsPage } from '../book-details/book-details.page';

@Component({
  selector: 'app-find-all-books',
  templateUrl: './find-all-books.page.html',
  styleUrls: ['./find-all-books.page.scss'],
})
export class FindAllBooksPage implements OnInit {
  books: Book[];

  constructor(private bookService: BookService, private modalController: ModalController) { }

  ngOnInit() {
    this.bookService.findllBooks().subscribe(books => {
      this.books = books;
    });
  }
  async bookDetails(idBook: number) {
    const modal = await this.modalController.create({
      component: BookDetailsPage,
      swipeToClose: true,
      componentProps: {idBook}
    });
    return await modal.present();
  }
}
