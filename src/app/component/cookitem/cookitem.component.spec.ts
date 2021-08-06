import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookitemComponent } from './cookitem.component';

describe('CookitemComponent', () => {
  let component: CookitemComponent;
  let fixture: ComponentFixture<CookitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CookitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CookitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
