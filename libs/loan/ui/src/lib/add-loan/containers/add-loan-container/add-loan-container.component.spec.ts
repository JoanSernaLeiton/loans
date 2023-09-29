import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddLoanContainerComponent } from './add-loan-container.component';

describe('AddLoanContainerComponent', () => {
  let component: AddLoanContainerComponent;
  let fixture: ComponentFixture<AddLoanContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddLoanContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddLoanContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
