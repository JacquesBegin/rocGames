import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheArticlesComponent } from './the-articles.component';

describe('TheArticlesComponent', () => {
  let component: TheArticlesComponent;
  let fixture: ComponentFixture<TheArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheArticlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
