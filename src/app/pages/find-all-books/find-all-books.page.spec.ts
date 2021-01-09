import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindAllBooksPage } from './find-all-books.page';

describe('FindAllBooksPage', () => {
  let component: FindAllBooksPage;
  let fixture: ComponentFixture<FindAllBooksPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindAllBooksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindAllBooksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
