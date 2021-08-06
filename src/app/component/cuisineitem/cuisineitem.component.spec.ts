import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuisineitemComponent } from './cuisineitem.component';

describe('CuisineitemComponent', () => {
  let component: CuisineitemComponent;
  let fixture: ComponentFixture<CuisineitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuisineitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuisineitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
