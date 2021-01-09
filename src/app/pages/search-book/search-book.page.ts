import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/modal/Modal';
import { BookService } from 'src/app/service/book.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.page.html',
  styleUrls: ['./search-book.page.scss'],
})
export class SearchBookPage implements OnInit {
  book: Book = {} as Book;
  showDiv = false;
  
  constructor(private bookService: BookService) { }

  ngOnInit() {

  }

  searchBook() {
   this.bookService.findBookByName(this.book.name).subscribe(book => {
     this.book = book;
     this.showDiv = true;
   });
  }
}
