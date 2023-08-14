import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;
  private username = '';
  public response1: any;

  constructor(private http: HttpClient) {}
  login(username: string, password: string): Observable<any> {
    const data = {
      login: username,
      senha: password,
    };
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return this.http.post(
      'http://localhost:8080/autenticar',
      data,
      httpOptions
    );
  }

  logout(): void {
    this.isAuthenticated = false;
    this.username = '';
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getUsername(): string {
    return this.username;
  }
}
