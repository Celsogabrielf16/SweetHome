import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  statusMenu: boolean = false;
  user!: User;

  constructor(
    private userService: UserService,
    private router: Router,
    private navigationService: NavigationService
  ) {
    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }

  changeStatusMenu(){
    this.statusMenu = !this.statusMenu;
  }

  login() {
    const returnUrl = this.navigationService.currentUrl;

    if (returnUrl === '/') {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/login'], { queryParams: { returnUrl } })
    }
  }

  logout() {
    this.userService.logout();
  }

  get isAuth() {
    return this.user.token;
  }
}
