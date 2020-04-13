import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';
import {tap} from 'rxjs/operators';

const apiUrl = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(data: any): Observable<any> {
    const body = {
      email: data.email,
      password: data.password
    };
    return this.http.post<any>(apiUrl + 'sign', body);
  }

  register(form: NgForm) {
    return this.http.post<any>(apiUrl + 'register', form);
  }
}
