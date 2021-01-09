import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Book } from 'src/app/modal/Modal';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.page.html',
  styleUrls: ['./add-book.page.scss'],
})
export class AddBookPage implements OnInit {
  progressBar = false;
  book: Book = {} as Book;
  idCategory: number;
  idBook: number;

  constructor(private modalController: ModalController, private bookService: BookService) { }

  ngOnInit() {
    if (this.idBook != null) {
      this.bookService.findBookById(this.idBook).subscribe(book => {
        this.book = book;
      })
    }
  }

  addBook() {
    this.progressBar = true;
    if (this.idBook != null) {
      this.bookService.editBook(this.book, this.idBook, this.idCategory).subscribe(book => {
        this.book = book;
        window.location.reload();
      })
    } else {
      this.bookService.addBookToCategory(this.book, this.idCategory).subscribe(book => {
        this.book = book;
        window.location.reload();
      })
    }
  }

  cancel() {
    this.modalController.dismiss();
  }
}
