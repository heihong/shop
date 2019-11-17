import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopinAddToCartComponent } from './popin-add-to-cart.component';

describe('PopinAddToCartComponent', () => {
  let component: PopinAddToCartComponent;
  let fixture: ComponentFixture<PopinAddToCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopinAddToCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopinAddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
