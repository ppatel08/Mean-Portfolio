import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private BASE_URL = environment.apiEndpoint;

  constructor(private http: HttpClient) { }

  login(body: any): Observable<any> {
    return this.http.post(`${this.BASE_URL}/portfolio/api/v1/login`, body);
  }



}
