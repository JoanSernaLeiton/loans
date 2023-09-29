import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoanContainerComponent } from './loan-container.component';

describe('LoanContainerComponent', () => {
  let component: LoanContainerComponent;
  let fixture: ComponentFixture<LoanContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoanContainerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LoanContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
