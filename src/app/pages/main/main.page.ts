import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Book, Category, User } from 'src/app/modal/Modal';
import { BookService } from 'src/app/service/book.service';
import { CategoryService } from 'src/app/service/category.service';
import { UserService } from 'src/app/service/user.service';
import { AddBookPage } from '../add-book/add-book.page';
import { AddCategoryPage } from '../add-category/add-category.page';
import { BookDetailsPage } from '../book-details/book-details.page';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  user: User = {} as User;
  userLength = 0;
  showBtnAdd: boolean;
  categories: Category[];
  books: Book[];
  showIndex =- 1;
  categoryLength = 0;

  constructor(private userService: UserService, private modalController: ModalController,
    private categoryService: CategoryService, private bookService: BookService) { }

  ngOnInit() {
    if(this.user!=null) {
      this.userService.findByUsername(this.userService.getUsername()).subscribe(user => {
        this.user = user  
        this.showBtnAdd = this.user.admin;  
     });
    }
    this.categoryService.findAllCategories().subscribe(categories => {
      this.categories = categories;
    })
  }
  async login() {
    const modal = await this.modalController.create({
      component: LoginPage,
      swipeToClose: true,
    });
    return await modal.present();
  }
  async addCategory(idUser: number) {
    const modal = await this.modalController.create({
      component: AddCategoryPage,
      swipeToClose: true,
      componentProps: {idUser}
    });
    return await modal.present();
  }
  async editCategory(idCategory: number) {
    const modal = await this.modalController.create({
      component: AddCategoryPage,
      swipeToClose: true,
      componentProps: {idCategory}
    });
    return await modal.present();
  }
  async addBook(idCategory: number) {
    const modal = await this.modalController.create({
      component: AddBookPage,
      swipeToClose: true,
      componentProps: {idCategory}
    });
    return await modal.present();
  }
  async editBook(idBook: number, idCategory: number) {
    const modal = await this.modalController.create({
      component: AddBookPage,
      swipeToClose: true,
      componentProps: {idBook, idCategory}
    });
    return await modal.present();
  }
  async bookDetails(idBook: number) {
    const modal = await this.modalController.create({
      component: BookDetailsPage,
      swipeToClose: true,
      componentProps: {idBook}
    });
    return await modal.present();
  }

  deleteCategory(id: number) {
    if(confirm('Are you sure')) {
      this.categoryService.deleteCategory(id).subscribe(() => {
        window.location.reload();
      });
    }
  }
  deleteBook(id: number) {
    if(confirm('Are you sure')) {
      this.bookService.deleteBook(id).subscribe(() => {
        window.location.reload();
      });
    }
  }
  toggle(item: any, id: number, index: any) {
    item.expanded = !item.expanded;
    this.showIndex = index;
    this.bookService.findBooksForCategory(id).subscribe(books => {
      this.books = books;
      this.categoryLength = books.length;
    })
  }
  logout(id: number) {
    this.userService.signOut();
    window.location.reload();
    /*
    this.userService.deleteUser(id).subscribe(() => {

    })*/
  }
}
