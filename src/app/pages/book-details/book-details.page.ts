import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Book } from 'src/app/modal/Modal';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
})
export class BookDetailsPage implements OnInit {
  book: Book = {} as Book;
  idBook: number;

  constructor(private modalController: ModalController, private bookService: BookService) { }

  ngOnInit() {
    this.bookService.findBookById(this.idBook).subscribe(book => {
      this.book = book;
    })
  }

  cancel() {
    this.modalController.dismiss();
  }
}
