import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService
  ) {}

  login(
    usernameInput: HTMLInputElement,
    passwordInput: HTMLInputElement
  ): void {
    const username = usernameInput.value;
    const password = passwordInput.value;


    if(username=="admin" && password=="admin"){
        this.cookieService.set('isLoggedIn', 'true');
        this.router.navigate(['/home']);
    }
  }
}
