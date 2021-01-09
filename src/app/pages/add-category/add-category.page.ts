import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Category } from 'src/app/modal/Modal';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.page.html',
  styleUrls: ['./add-category.page.scss'],
})
export class AddCategoryPage implements OnInit {
  category: Category = {} as Category;
  progressBar = false;
  idUser: number;
  idCategory: number;

  constructor(private categoryService: CategoryService, private modalController: ModalController) { }

  ngOnInit() {
    if(this.idCategory!=null) {
      this.categoryService.findCategoryById(this.idCategory).subscribe(category => {
        this.category = category;
      })
    }
     
  }
  addCategory() {
    this.progressBar = true;
    if(this.idCategory!=null) {
    this.categoryService.editCategory(this.category, this.idCategory, this.idUser).subscribe(category => {
      this.category = category;
      window.location.reload();
    })
  } else {
    this.categoryService.addCategoryToUser(this.category, this.idUser).subscribe(category => {
      this.category = category;
      window.location.reload();
    })
  }
  }
  cancel() {
    this.modalController.dismiss();
  }
}
