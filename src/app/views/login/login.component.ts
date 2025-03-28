import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';
import icons from 'src/assets/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  @ViewChild('passwordInputRef') passwordInputRef: ElementRef;
  @ViewChild('emailInputRef') emailInputRef: ElementRef;

  iconsInputs: Object | any = icons;
  user: User = new User;
  visiblePassword: boolean = false;
  returnUrl = '';

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  login() {
    const emailError = this.checkMandatoryFieldError(this.emailInputRef.nativeElement);
    const passwordError = this.checkMandatoryFieldError(this.passwordInputRef.nativeElement);

    if (!emailError && !passwordError) {
      this.emailInputRef.nativeElement.parentElement.classList.remove('failedLoginErrorEmail');
      this.passwordInputRef.nativeElement.parentElement.classList.remove('failedLoginErrorPassword');

      this.userService.login({
        email: this.user.email,
        password: this.user.password
      }).subscribe(() => {
        this.router.navigateByUrl(this.returnUrl);
      }, (error) => {
        this.emailInputRef.nativeElement.parentElement.classList.add('failedLoginErrorEmail');
        this.passwordInputRef.nativeElement.parentElement.classList.add('failedLoginErrorPassword');
      });
    }

  }

  seePassword() {
    this.visiblePassword = !this.visiblePassword;
    this.passwordInputRef.nativeElement.type = !this.visiblePassword ? 'password' : 'text';
  }

  addFailedLoginErrorClass(element: any) {
    element.parentElement.classList.add('failedLoginError');
  }

  removeFailedLoginErrorClass(element: any) {
    element.parentElement.classList.remove('failedLoginError');
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
