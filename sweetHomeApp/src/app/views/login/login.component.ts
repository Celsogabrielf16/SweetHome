import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/User';
import { Iuser } from 'src/app/interfaces/Iuser';
import icons from 'src/assets/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  @ViewChild('passwordInputRef') passwordInputRef: ElementRef;
  @ViewChild('emailInputRef') emailInputRef: ElementRef;

  iconsInputs: Object | any = icons;
  user: Iuser = new User;

  visiblePassword: boolean = false;

  constructor(private router: Router) {}

  login() {
    const emailError = this.checkMandatoryFieldError(this.emailInputRef.nativeElement);
    const passwordError = this.checkMandatoryFieldError(this.passwordInputRef.nativeElement);

    if (!emailError && !passwordError) {
      console.log(this.user);
      this.router.navigate(['/']);
    }

  }

  seePassword() {
    this.visiblePassword = !this.visiblePassword;
    this.passwordInputRef.nativeElement.type = !this.visiblePassword ? 'password' : 'text';
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
