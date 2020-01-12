import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TheContactComponent } from './the-contact.component';

describe('TheContactComponent', () => {
  let component: TheContactComponent;
  let fixture: ComponentFixture<TheContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TheContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
