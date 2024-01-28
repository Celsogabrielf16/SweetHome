import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/classes/User';
import { Iuser } from 'src/app/interfaces/Iuser';
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
  newUser: Iuser = new User;

  visiblePassword: boolean = false;
  differentPasswordsError: boolean = false;
  mandatoryFieldError: boolean = false;

  constructor(private router: Router) {}

  register() {
    this.checkMandatoryFieldError(this.nameInputRef.nativeElement);
    this.checkMandatoryFieldError(this.emailInputRef.nativeElement);
    this.checkMandatoryFieldError(this.passwordInputRef.nativeElement);
    this.checkMandatoryFieldError(this.passwordConfirmationInputRef.nativeElement);
    this.checkDifferentPasswordsError();

    if (!this.mandatoryFieldError && !this.differentPasswordsError) {
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

  checkMandatoryFieldError(element: any) {
    if (element.value.length == 0) {
      element.parentElement.classList.add('mandatoryFieldError');
      this.mandatoryFieldError = true;
    } else {
      element.parentElement.classList.remove('mandatoryFieldError');
      this.mandatoryFieldError = false;
    }
  }
}
