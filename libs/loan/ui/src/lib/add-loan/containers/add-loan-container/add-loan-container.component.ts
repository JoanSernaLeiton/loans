import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'klym-add-loan-container',
  templateUrl: './add-loan-container.component.html',
  styleUrls: ['./add-loan-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddLoanContainerComponent implements OnInit {
  addLoanForm: FormGroup<unknown> | unknown;
  constructor(private readonly formBuilder: FormBuilder) {}
  ngOnInit() :void{
    this.addLoanForm = this.formBuilder.group({})
  }
}
