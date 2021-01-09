import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../modal/Modal';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = 'http://localhost:8080/api';

  constructor(private http: HttpClient) { }

  addBookToCategory(book: Book, id: number): Observable<Book> {
    return this.http.post<Book>(`${this.url}/addBookToCategory/${id}`, book);
  }

  editBook(book: Book, id: number, idCategory: number): Observable<Book> {
    return this.http.put<Book>(`${this.url}/editBook/${id}/${idCategory}`, book);
  }

  deleteBook(id: number): Observable<Book> {
    return this.http.delete<Book>(`${this.url}/deleteBook/${id}`);
  }

  findBookByName(name: string): Observable<Book> {
    return this.http.get<Book>(`${this.url}/findBookByName/${name}`);
  }

  findBookById(id: number): Observable<Book> {
    return this.http.get<Book>(`${this.url}/findBookById/${id}`);
  }

  findllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.url}/findllBooks`);
  }

  findBooksForCategory(id: number): Observable<Book[]> {
    return this.http.get<Book[]>(`${this.url}/findBooksForCategory/${id}`);
  }
}
