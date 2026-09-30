import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductoCarde } from './producto-carde';

describe('ProductoCarde', () => {
  let component: ProductoCarde;
  let fixture: ComponentFixture<ProductoCarde>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductoCarde],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductoCarde);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
