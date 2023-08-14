import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css'],
})
export class HomeComponentComponent implements OnInit {
  constructor(private cookieService: CookieService, private router: Router) {}

  ngOnInit(): void {}

  logout() {
    this.cookieService.delete('isLoggedIn');
    this.router.navigate(['login']);
  }

  home() {
    this.router.navigate(['/home']);
  }
  clientes() {
    this.router.navigate(['/clientes']);
  }
}
