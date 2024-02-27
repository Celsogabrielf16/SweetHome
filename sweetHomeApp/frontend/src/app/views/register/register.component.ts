import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/shared/models/User';
import icons from 'src/assets/icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  @ViewChild("nameInputRef") nameInputRef : ElementRef;
  @ViewChild("emailInputRef") emailInputRef : ElementRef;
  @ViewChild("passwordInputRef") passwordInputRef : ElementRef;
  @ViewChild("passwordConfirmationInputRef") passwordConfirmationInputRef : ElementRef;

  iconsInputs: Object | any = icons;
  passwordConfirmation: string;
  newUser: User = new User;

  visiblePassword: boolean = false;
  differentPasswordsError: boolean = false;

  constructor(private router: Router) {}

  register() {
    const nameError = this.checkMandatoryFieldError(this.nameInputRef.nativeElement);
    const emailError = this.checkMandatoryFieldError(this.emailInputRef.nativeElement);
    const passwordError = this.checkMandatoryFieldError(this.passwordInputRef.nativeElement);
    const passwordConfirmationError = this.checkMandatoryFieldError(this.passwordConfirmationInputRef.nativeElement);
    this.checkDifferentPasswordsError();

    if (!nameError && !emailError && !passwordError && !passwordConfirmationError && !this.differentPasswordsError) {
      console.log(this.newUser);
      this.router.navigate(['/']);
    }
  }

  seePassword() {
    this.visiblePassword = !this.visiblePassword;
    this.passwordInputRef.nativeElement.type = !this.visiblePassword ? 'password' : 'text';
    this.passwordConfirmationInputRef.nativeElement.type = !this.visiblePassword ? 'password' : 'text';
  }


  checkDifferentPasswordsError() {
    this.differentPasswordsError = this.newUser.password != this.passwordConfirmation ? true : false;
  }

  checkMandatoryFieldError(element: any): boolean {
    if (element.value.length == 0) {
      element.parentElement.classList.add('mandatoryFieldError');
      return true;
    } else {
      element.parentElement.classList.remove('mandatoryFieldError');
      return false;
    }
  }
}
