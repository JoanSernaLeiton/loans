import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { AuthFacade } from '@authentication/facade';
import { FormControls } from '../../helpers/forms-control';
import { SignUpDTO } from '@authentication/domain';

@Component({
  selector: 'klym-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup<FormControls<SignUpDTO>> | undefined;
  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly authFacade: AuthFacade
  ) {}
  ngOnInit(): void {
    this.loadInitialData();
  }

  loadInitialData(): void {
    this.signUpForm = this.loadSignUpForm();
  }

  private loadSignUpForm(): FormGroup<FormControls<SignUpDTO>> {
    return this.formBuilder.group({
      name: new FormControl('', {
        validators: Validators.compose([Validators.required]),
        nonNullable: true,
      }),
      lastName: new FormControl('', {
        validators: Validators.compose([Validators.required]),
        nonNullable: true,
      }),
      email: new FormControl('', {
        validators: Validators.compose([Validators.required, Validators.email]),
        nonNullable: true,
      }),
      password: new FormControl('', {
        validators: Validators.compose([Validators.required]),
        nonNullable: true,
      }),
    });
  }

  signUp() :void{
    if (this.signUpForm) {
      console.log('initialize register user');
      const { name, email, password,lastName } = this.signUpForm.getRawValue();
      this.authFacade.signUp({
        name,
        lastName,
        email,
        password,
      });
    }
  }
}
