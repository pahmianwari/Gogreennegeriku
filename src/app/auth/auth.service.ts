import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    const body = { email: email, password: password };
    return this.http.post<any>('https://localhost/gogreen/login2.php', body);
  }

  daftar(email: string, password: string) {
    const body = { email: email, password: password };
    return this.http.post<any>('https://localhost/gogreen/tambah.php', body);
  }
}