import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../modal/Modal';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  addCategoryToUser(category: Category, id: number): Observable<Category> {
    return this.http.post<Category>(`${this.url}/addCategoryToUser/${id}`, category);
  }

  editCategory(category: Category, id: number, idUser: number): Observable<Category> {
    return this.http.put<Category>(`${this.url}/editCategory/${id}/${idUser}`, category);
  }

  deleteCategory(id: number): Observable<Category> {
    return this.http.delete<Category>(`${this.url}/deleteCategory/${id}`);
  }

  findCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.url}/findCategoryById/${id}`);
  }

  findAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.url}/findAllCategories`);
  }
  
  findCategoriesForUser(id: number): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.url}/findCategoriesForUser/${id}`);
  }
}
