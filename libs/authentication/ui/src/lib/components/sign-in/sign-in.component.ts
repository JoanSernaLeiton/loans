import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormControls } from '../../helpers/forms-control';
import { AuthFacade } from '@authentication/facade';
import { SignInDTO } from '@authentication/domain';

@Component({
  selector: 'klym-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup<FormControls<SignInDTO>> | undefined;

  constructor(
    private readonly authFacade: AuthFacade,
    private readonly formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loadInitialData();
  }

  loadInitialData(): void {
    this.signInForm = this.loadSignInForm();
  }

  loadSignInForm(): FormGroup<FormControls<SignInDTO>> {
    return this.formBuilder.group({
      email: new FormControl('', {
        validators: Validators.compose([Validators.email, Validators.required]),
        nonNullable: true,
      }),
      password: new FormControl('', {
        validators: Validators.compose([Validators.required]),
        nonNullable: true,
      }),
    });
  }

  signIn(): void {
    if (this.signInForm) {
      const { email, password } = this.signInForm.getRawValue();
      this.authFacade.signIn({
        email,
        password,
      });
    }
  }
}
