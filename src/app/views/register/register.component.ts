import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUserRegister } from 'src/app/shared/interfaces/IUserRegister';

import { User } from 'src/app/shared/models/User';
import icons from 'src/assets/icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  @ViewChild("nameInputRef") nameInputRef : ElementRef;
  @ViewChild("emailInputRef") emailInputRef : ElementRef;
  @ViewChild("passwordInputRef") passwordInputRef : ElementRef;
  @ViewChild("passwordConfirmationInputRef") passwordConfirmationInputRef : ElementRef;

  iconsInputs: Object | any = icons;
  passwordConfirmation: string;
  newUser: User = new User;
  returnUrl = '';

  visiblePassword: boolean = false;
  differentPasswordsError: boolean = false;

  constructor(
      private router: Router,
      private userService: UserService,
      private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  register() {
    const nameError = this.checkMandatoryFieldError(this.nameInputRef.nativeElement);
    const emailError = this.checkMandatoryFieldError(this.emailInputRef.nativeElement);
    const passwordError = this.checkMandatoryFieldError(this.passwordInputRef.nativeElement);
    const passwordConfirmationError = this.checkMandatoryFieldError(this.passwordConfirmationInputRef.nativeElement);
    this.checkDifferentPasswordsError();

    if (!nameError && !emailError && !passwordError && !passwordConfirmationError && !this.differentPasswordsError) {
      this.removeUserAlreadyExistErrorColorClass();
      const { name, email, password } = this.newUser;

      const user: IUserRegister = {
        name,
        email,
        password
      };

      this.userService.register(user).subscribe( _ => {
        this.router.navigateByUrl(this.returnUrl);
      }, (error) => {
        if (error.error == "Usuario ja existe!") {
          this.nameInputRef.nativeElement.parentElement.classList.add('userAlreadyExistErrorColor');
          this.emailInputRef.nativeElement.parentElement.classList.add('userAlreadyExistErrorColor');
          this.passwordInputRef.nativeElement.parentElement.classList.add('userAlreadyExistErrorColor');
          this.passwordConfirmationInputRef.nativeElement.parentElement.classList.add('userAlreadyExistErrorLabel');
        }
      })

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
      this.removeUserAlreadyExistErrorColorClass();
      return false;
    }
  }

  removeUserAlreadyExistErrorColorClass() {
    this.nameInputRef.nativeElement.parentElement.classList.remove('userAlreadyExistErrorColor');
    this.emailInputRef.nativeElement.parentElement.classList.remove('userAlreadyExistErrorColor');
    this.passwordInputRef.nativeElement.parentElement.classList.remove('userAlreadyExistErrorColor');
    this.passwordConfirmationInputRef.nativeElement.parentElement.classList.remove('userAlreadyExistErrorLabel');
  }
}
